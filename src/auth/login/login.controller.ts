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
    
    const token = await this.authService.login(req.body.user);
    
    if (token != null && token['accessToken']) {
      return {
        status: 'succcess',
        accessToken: token['accessToken'],
      }
    }

    return {
      status: 'error',
      accessToken: null,
    }
  }
}
