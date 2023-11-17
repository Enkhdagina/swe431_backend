import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { Document } from 'mongoose';

import { User } from './user.schema';
import { OrderPaymentType, OrderStatus, OrderType } from 'src/util/enum';
import { Product } from './product.schema';
import { Payment } from './payment.schema';

export type OrderDocument = Document & Order;

@Schema({ timestamps: true })
export class Order {
  @Prop({type: mongoose.Schema.ObjectId , ref: 'Product'})
  product: string ;
  @Prop()
  quantity: number;
  @Prop()
  address: string;
  @Prop({ enum: OrderType })
  type: OrderType;
  @Prop({type: mongoose.Schema.ObjectId, ref: 'Payment'})
  payment: string ;
  @Prop({type: mongoose.Schema.ObjectId, ref: 'User'})
  user: string;
  @Prop({ enum: OrderStatus })
  status: OrderStatus;
  @Prop({ enum: OrderPaymentType })
  orderPayment: OrderPaymentType;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
