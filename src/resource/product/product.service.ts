import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schema';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private model: Model<ProductDocument>,
  ) {}

  async create(dto: ProductDto) {
    try {
      return await this.model.create(dto);
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findAll() {
    return await this.model.find();
  }

  async findById(id: string) {
    return await this.model.findById(id);
  }

  async deleteById(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
  async delete() {
    return await this.model.deleteMany();
  }
}
