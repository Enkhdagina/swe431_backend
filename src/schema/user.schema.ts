import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import mongoose, { Document, Types } from 'mongoose';

export type UserDocument = Document & User;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  email: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({type:Array<Types.ObjectId>, ref:'products'})
  basket:  string[]
}

export const UserSchema = SchemaFactory.createForClass(User);
