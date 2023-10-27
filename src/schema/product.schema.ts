import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { Document } from 'mongoose';

import { User } from './user.schema';

export type ProductDocument = Document & Product;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  ingredients: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
