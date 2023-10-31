import { Global, Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema, Payment, PaymentSchema, Product, ProductSchema } from 'src/schema';
import { PaymentService } from '../payment/payment.service';
import { ProductService } from '../product/product.service';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema},{name: Payment.name, schema: PaymentSchema},])],
  controllers: [OrderController],
  providers: [OrderService, PaymentService, ],
  exports: [OrderService]
})
export class OrderModule {}
