import { Controller, Get, Post, Put, Delete, Body, Param, } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.createItem(createItemDto);
  }

  @Put(':id')
  updateItem(@Param('id') id, @Body() updateItem: CreateItemDto) {
    return this.itemService.updateItem(id, updateItem);
  }

  @Delete(':id')
  deleteItem(@Param('id') id) {
    return this.itemService.deleteItem(id);
  }
}
