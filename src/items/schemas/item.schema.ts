import * as monggose from 'mongoose'

const itemSchema = {
  name: String,
  qty: Number,
  desc: String,
};

export const ItemSchema = new monggose.Schema(itemSchema);