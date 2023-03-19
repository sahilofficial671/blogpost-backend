import { Controller, Post, Req,} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/common/services/auth/auth.service';

@Controller('auth/login')
export class LoginController {
  constructor(
    private authService: AuthService
  ) {}

  @Post()
  async login(@Req() req: Request){
    console.log("Body Recieved for Authentication ==> ", req.body);
    
    const response = await this.authService.login(req.body.user);
    
    if (response != null && response['user'] && response['accessToken']) {
      return {
        status: 'success',
        ...response
      }
    }

    return {
      status: 'error',
      message: response?.message || 'Something went wrong!',
      accessToken: null,
    }
  }
}
