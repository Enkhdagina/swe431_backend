import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { OrderPaymentType, OrderStatus, OrderType, PaymentType } from 'src/util/enum';

export class OrderDto {
  @ApiProperty()
  @IsString()
  product: string;
  @ApiProperty()
  @IsString()
  quantity: number;
  @ApiProperty()
  @IsString()
  address: string;
  @ApiProperty()
  @IsEnum(OrderType)
  type: OrderType;
  @ApiProperty({ default: OrderStatus.QUEUE })

  status: OrderStatus;
  @ApiProperty({ default: OrderPaymentType.UNPAID })

  orderPayment: OrderPaymentType;
  @ApiProperty()
  @IsEnum(PaymentType)
  payment: PaymentType;
  @ApiProperty()
  user: string;
}
