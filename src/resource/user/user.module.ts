import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema, User, UserSchema } from 'src/schema';
import { UserCOntroller } from './user.controller';
import { UserService } from './user.service';
import { ProductService } from '../product/product.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema, }, { name: Product.name, schema: ProductSchema}]),
  ],
  controllers: [UserCOntroller],
  providers: [UserService, ProductService],
  exports: [UserService],
})
export class UserModule {}
