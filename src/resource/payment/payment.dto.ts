import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { PaymentType } from 'src/util/enum';

export class PaymentDto {
  @ApiProperty({ enum: PaymentType })
  @IsEnum(PaymentType)
  type: PaymentType;
  @IsString()
  @ApiProperty()
  bank: string;

  @ApiProperty()
  img: string;
  @IsNumber()
  @ApiProperty()
  accountNumber: number;
  @IsString()
  @ApiProperty()
  accountName: string;

  @ApiProperty()
  name: string;
  @ApiProperty()
  text: string;

  @ApiProperty()
  @IsString()
  user: string;
}
