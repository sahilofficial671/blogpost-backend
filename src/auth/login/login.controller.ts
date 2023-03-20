import { Controller, Post, Req, Res,} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from 'src/common/services/auth/auth.service';
import { HttpStatusCode } from 'axios';

@Controller('auth/login')
export class LoginController {
  constructor(
    private authService: AuthService
  ) {}

  @Post()
  async login(@Req() req: Request, @Res() res: Response){
    console.log("Body Recieved for Authentication ==> ", req.body);
    
    const response = await this.authService.login(req.body.user);
    
    if (response != null && response['user'] && response['accessToken']) {
      return res
        .status(response['newUserCreated'] ? HttpStatusCode.Created : HttpStatusCode.Ok)
        .json({
          status: 'success',
          ...response
        })
    }

    return res
      .status(HttpStatusCode.Unauthorized)
      .json({
        status: 'error',
        message: response?.message || 'Something went wrong!',
        accessToken: null,
      });
  }
}
