import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { LoginDto, SignUpDto } from './auth.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private service: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() dto: LoginDto) {
    return this.service.signIn(dto.username, dto.password);
  }

  @Post('register')
  signUp(@Body() dto: SignUpDto) {
    return this.service.signUp(dto);
  }
}
