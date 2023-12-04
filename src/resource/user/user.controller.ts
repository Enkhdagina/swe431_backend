import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { AuthGuard } from 'src/guard/auth.guard';


@Controller('user')
@ApiTags('User')
@UseGuards(AuthGuard)
@ApiBasicAuth('access-token')
export class UserCOntroller {
  constructor(private service: UserService) {}
  @Post()
  create(@Body() dto: UserDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('/me')
  me(@Request() { user }) {
    return this.service.findById(user['id']);
  }
  @Get('/basket')
  basket(@Request() { user }) {
    return this.service.findBasket(user['id']);
  }

  @Get("basket/:id")
  updateBasket(@Param('id') id: string, @Request() {user}) {

    return this.service.updateBasket(id, user['_id'])
  }
}
