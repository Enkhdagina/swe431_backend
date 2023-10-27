import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private service: AuthService,
    private userService: UserService,
  ) {}
}
