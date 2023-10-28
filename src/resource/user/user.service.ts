import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema';
import { UserDto } from './user.dto';
import { ProductService } from '../product/product.service';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>, private productService: ProductService) {}
  async findOne(username: string): Promise<User | undefined> {
    return await this.model.findOne({ username });
  }
  async create(dto: UserDto) {
    try {
      return await this.model.create(dto);
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findById(id: string) {
    return await this.model.findById(id);
  }

  async findAll() {
    return await this.model.find();
  }

  async updateBasket(id: string, user: string) {
    let product = await this.productService.findById(id)
   
    if(!product) throw new HttpException('Олдсонгүй', 404)
    let u = await this.model.findById(user)
  let basket = u.basket.includes(id)

  if(basket) {
    let baskets = u.basket.filter((b) => b != id)
    return await this.model.updateOne({_id: user}, {
      $set: {basket: baskets}
    })
  }
    return await this.model.updateOne({_id: user}, {
  $addToSet: {basket: id}})
  }

  async findBasket(user: string) {
    try {
      return (await this.model.findById(user)).basket
    } catch (error) {
      
    }
  }
}
