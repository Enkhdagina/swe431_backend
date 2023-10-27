import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}
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

  async findAll() {
    return await this.model.find();
  }
}
