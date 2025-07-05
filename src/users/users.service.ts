import { ConflictException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService extends PrismaClient implements OnModuleInit {

    private readonly logger = new Logger('UsersService')

    async onModuleInit() {
        await this.$connect();
        this.logger.log('Prisma Client connected successfully');
    }

   async create(createUserDto: CreateUserDto) {
        const existing = await this.findByEmail(createUserDto.email);
        if (existing) {
            throw new ConflictException('El email ya está registrado');
        }
        return this.user.create({
            data: createUserDto
        });
    }

    async findByEmail(email: string) {
        return this.user.findUnique({ where: { email } });
    }

    async getUserMessages(id: number) {
        const user = await this.user.findUnique({
            where: { id },
            include: { messages: true },
        });
        if (!user) throw new Error('Usuario no encontrado');
        return user.messages;
    }

}
