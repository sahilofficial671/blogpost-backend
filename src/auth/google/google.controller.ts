import { Controller, Get } from '@nestjs/common';

@Controller('google')
export class GoogleController {
  @Get('login')
  googleLogin() {

  }

  @Get('callback')
  googleCallback() {
    
  }
}
