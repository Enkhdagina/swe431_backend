import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@ApiTags('User')
// @UseGuards(AuthGuard)
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
}
