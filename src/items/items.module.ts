import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from './schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }])],
  // imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],    // this also work
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
