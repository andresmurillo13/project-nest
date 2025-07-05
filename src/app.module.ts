import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';


@Module({
  imports: [UsersModule, MessagesModule],
  providers: [],
})
export class AppModule { }
