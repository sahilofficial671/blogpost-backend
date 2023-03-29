import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { JwtGuard } from 'src/common/guards/jwt.guard';

@Controller('auth')
export class AuthController {
  @Get('validate')
  @UseGuards(JwtGuard)
  validate(@Req() req: Request, @Res() res: Response){
    return res
      .status(HttpStatusCode.Ok)  
      .json({
        status: 'success',
        message: 'Session is Valid'
      });
  }
}
