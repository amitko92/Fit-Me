import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemController } from './items.controller';
import { ItemsService } from './items.service';
import { Item, ItemSchema } from 'src/schemas/item.schema';



@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Item.name, schema: ItemSchema}]),
  ],
  controllers: [ItemController],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule {}