import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private model: Model<ProductDocument>,
  ) {}
}
