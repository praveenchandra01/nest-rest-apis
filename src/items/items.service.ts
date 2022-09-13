import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find({}, '-__v');
  }
  async findOne(params): Promise<Item> {
    return await this.itemModel.findOne(params.id, '-__v');
  }

  async createItem(item: Item): Promise<Item> {
    let newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async updateItem(id, data: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
  }

  async deleteItem(id): Promise<Item> {
    return await this.itemModel.findByIdAndDelete({ _id: id });
  }
}