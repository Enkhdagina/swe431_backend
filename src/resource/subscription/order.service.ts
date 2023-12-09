import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/schema';
import { OrderDto } from './order.dto';
import { PaymentService } from '../payment/payment.service';
import { OrderPaymentType, OrderStatus } from 'src/util/enum';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private model: Model<OrderDocument>,
    private paymentService: PaymentService,
  ) {}

  async create(dto: OrderDto, user: string) {
    dto.user = user;
    dto.status = OrderStatus.QUEUE
    dto.orderPayment = OrderPaymentType.UNPAID
    let payment = await this.paymentService.findOne(dto.payment);
    return await this.model.create({
      ...dto,
      payment: payment._id,
    });
  }

  async findAll() {
    return await this.model.find().populate('product').populate('user');
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async findUser(user: string) {
    let res = await this.model
      .find({ user })
      .populate('payment')
      .populate('product')
      .exec();

    return res;
  }

  async deleteAll() {
    return await this.model.deleteMany();
  }

  async deleteOne(id: string) {
    return await this.model.findByIdAndRemove(id);
  }

  async deleteUser(user: string) {
    return await this.model.deleteMany({ user });
  }
}
