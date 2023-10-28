import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private service: ProductService) {}

  @Post()
  create(@Body() dto: ProductDto) {
    return this.service.create(dto);
  }

  @UseGuards(AuthGuard)
  @Post('/basket')
  findMany(@Request() {user}) {
  
    
    return this.service.findMany(user['basket'])
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
