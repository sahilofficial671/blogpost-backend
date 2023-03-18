import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/common/guards/jwt.guard';

@Controller('auth/profile')
export class ProfileController {
  @Get()
  @UseGuards(JwtGuard)
  index(@Req() req: Request){
    return req.user;
  }
}
