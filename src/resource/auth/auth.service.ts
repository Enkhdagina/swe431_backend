import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './auth.dto';
import { PaymentService } from '../payment/payment.service';
import { PaymentType } from 'src/util/enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private paymentService: PaymentService,
  ) {}
  async signIn(username, pass) {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async signUp(dto: SignUpDto) {
    const user = await this.usersService.create(dto);
    if (!user) {
      throw new HttpException('Бүртгэлтэй байна', HttpStatus.BAD_REQUEST);
    }
    [
      PaymentType.CASH,
      PaymentType.INTERNET,
      PaymentType.QPAY,
      PaymentType.TRANSFER,
    ].map((type) => {
      this.paymentService.create({
        type: type,
        user: user.id,
        bank: '',
        accountNumber: 0,
        accountName: '',
        name: '',
        text: '',
      });
    });
    const payload = { email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
