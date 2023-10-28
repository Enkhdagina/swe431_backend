import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { PaymentDto } from './payment.dto';
import { AuthGuard } from 'src/guard/auth.guard';


@Controller('payment')
@ApiTags('Payment')
export class PaymentController {
  constructor(private service: PaymentService) {}

  @Post()
  create(@Body() dto: PaymentDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('user')
  @UseGuards(AuthGuard)
  findUser(@Request() { user }) {
 
    return this.service.findUser(user['_id']);
  }
  @Delete()
  deleteAll() {
    return this.service.deleteAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.service.deleteOne(id);
  }
}
