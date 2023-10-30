import { Module } from '@nestjs/common';

import appConfig from './config/app.config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './resource/auth/auth.module';
import { UserModule } from './resource/user/user.module';
import { OrderModule } from './resource/order/order.module';
import { PaymentModule } from './resource/payment/payment.module';
import { ProductModule } from './resource/product/product.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    MongooseModule.forRoot(appConfig().dbUrl, {
      dbName: appConfig().dbName,
    }),
    AuthModule,
    UserModule,
    OrderModule,
    PaymentModule,
    ProductModule,
    
  ],
 
  
})
export class AppModule {}
