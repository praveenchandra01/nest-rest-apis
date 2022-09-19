import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: "items" })
export class Item{
  @Prop({
    name: String
  })
  name: String

  @Prop({
    qty: Number
  })
  qty: Number
  
  @Prop({
    dese: String
  })
  desc: String
};

export const ItemSchema = SchemaFactory.createForClass(Item);