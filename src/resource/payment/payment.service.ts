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
          dto.img = 'v1698257440/xe62wmaaavljiinel7rg.svg';
          break;
        case PaymentType.TRANSFER:
          (dto.name = 'Дансаар шилжүүлэх'),
            (dto.text = 'Манай данс руу шилжүүлэх');
          dto.img = 'v1698257440/immnxp1uaubnnmd3dqmx.svg';
          break;
        case PaymentType.INTERNET:
          (dto.name = 'Интернет банк'),
            (dto.text = 'Интернет пин код шаардлагатай');
          dto.img = 'v1698257440/afj6nnj5uquwdn0fcng2.svg';
          break;
        case PaymentType.QPAY:
          (dto.name = 'QPAY'), (dto.text = 'QPAY-ээр төлбөрөө төлөх');
          dto.img = 'v1698257439/z2lgyvghpbkapztknthf.svg';
          break;
      }
      let payment = await this.model.findOne({
        type: dto.type,
        user: dto.user,
      });
  
      if (payment) {
        let res =  await this.model.findOneAndUpdate(
          { user: dto.user, type: dto.user, img: dto.img },
          dto,
        );
       
        return res
      }

      return await this.model.create(dto);
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findOne(type: PaymentType) {
    return await this.model.findOne({ type });
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
