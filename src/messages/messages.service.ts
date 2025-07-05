import { BadRequestException, Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateMessageDto } from './dtos/create-message.dto';

@Injectable()
export class MessagesService extends PrismaClient implements OnModuleInit {

    private readonly logger = new Logger('UsersService')

    async onModuleInit() {
        await this.$connect();
        this.logger.log('Prisma Client connected successfully');
    }


    async create(createMessageDto: CreateMessageDto) {
    
        const user = await this.user.findUnique({ where: { id: createMessageDto.userId } });
        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }
        if (!createMessageDto.content || createMessageDto.content.trim() === '') {
            throw new BadRequestException('El contenido no puede estar vacío');
        }
        return this.message.create({
            data: {
                content: createMessageDto.content,
                userId: createMessageDto.userId,
            },
        });
    }

}
