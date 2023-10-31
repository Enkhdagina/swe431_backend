import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { OrderType, PaymentType } from 'src/util/enum';

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
  @ApiProperty()
  @IsEnum(PaymentType)
  payment: PaymentType;
  @ApiProperty()
  user: string;
}
