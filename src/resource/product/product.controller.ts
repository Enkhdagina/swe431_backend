import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private service: ProductService) {}

  @Post()
  create(@Body() dto: ProductDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }
  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.service.deleteById(id);
  }

  @Delete()
  deleteAll() {
    return this.service.delete();
  }
}
