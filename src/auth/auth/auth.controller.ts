import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtGuard } from 'src/common/guards/jwt.guard';

@Controller('auth')
export class AuthController {
  @Get('validate')
  @UseGuards(JwtGuard)
  validate(@Req() req: Request, @Res() res: Response){
    return res.send({
      status: 'success',
      message: 'Session is Valid'
    });
  }
}
