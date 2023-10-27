import { Global, HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from 'src/schema';
import { PaymentDto } from './payment.dto';
import { PaymentType } from 'src/util/enum';
@Global()
@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private model: Model<PaymentDocument>,
  ) {}

  async create(dto: PaymentDto) {
    try {
      switch (dto.type) {
        case PaymentType.CASH:
          dto.name = 'Бэлнээр төлөх';
          dto.text = 'Бэлэн мөнгөөр төлөх';
          break;
        case PaymentType.TRANSFER:
          (dto.name = 'Дансаар шилжүүлэх'),
            (dto.text = 'Манай данс руу шилжүүлэх');
          break;
        case PaymentType.INTERNET:
          (dto.name = 'Интернет банк'),
            (dto.text = 'Интернет пин код шаардлагатай');
          break;
        case PaymentType.QPAY:
          (dto.name = 'QPAY'), (dto.text = 'QPAY-ээр төлбөрөө төлөх');
          break;
      }
      let payment = await this.model.findOne({
        type: dto.type,
        user: dto.user,
      });
      if (payment) {
        return await this.model.findOneAndUpdate(
          { user: dto.user, type: dto.user },
          dto,
        );
      }

      return await this.model.create(dto);
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findAll() {
    return await this.model.find();
  }
  async findUser(id: string) {
    return await this.model.find({ user: id });
  }

  async deleteAll() {
    return await this.model.deleteMany();
  }

  async deleteOne(id: string) {
    return await this.model.findByIdAndRemove(id);
  }
}
