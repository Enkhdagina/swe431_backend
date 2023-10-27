import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import appConfig from 'src/config/app.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import { PaymentService } from '../payment/payment.service';
import { PaymentModule } from '../payment/payment.module';
import { Payment, PaymentSchema } from 'src/schema';

@Module({
  imports: [
    UserModule,
    PaymentModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
    JwtModule.register({
      signOptions: { expiresIn: '7d' },
      secretOrPrivateKey: appConfig().appSecret,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PaymentService],
})
export class AuthModule {}
