import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { ItemController } from './items.controller';
import { ItemsService } from './items.service';



@Module({
  imports: [
    MongooseModule.forFeature([
      {name: User.name, schema: UserSchema}]),
  ],
  controllers: [ItemController],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule {}