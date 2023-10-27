import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
@ApiTags('User')
export class UserCOntroller {
  constructor(private service: UserService) {}
  @Post()
  create(@Body() dto: UserDto) {
    return this.service.create(dto)
  }

  @Get()
  findAll() {
    return this.service.findAll()
  }
}
