import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from 'src/schema';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private model: Model<PaymentDocument>,
  ) {}
}
