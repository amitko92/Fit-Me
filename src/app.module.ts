import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ItemsModule } from './modules/items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/fit-me'),
    UsersModule,
    ItemsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
