import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { Document } from 'mongoose';

import { User } from './user.schema';
import { PaymentType } from 'src/util/enum';

export type PaymentDocument = Document & Payment;

@Schema({ timestamps: true })
export class Payment {
   
    @Prop({enum: PaymentType})
	type: PaymentType;
    @Prop()
	bank: string
    @Prop()
	accountNumber: number;
    @Prop()
	accountName: string;
    @Prop()
    name: string
    @Prop()
	text: string

}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
