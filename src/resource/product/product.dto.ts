import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  @ApiProperty()
  img: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  price: number;

  @ApiProperty({
    type: Array<string>,
  })
  ingredients: string[];
}
