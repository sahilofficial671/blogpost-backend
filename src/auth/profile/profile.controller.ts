import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { InjectModel, Schema } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { isValidObjectId, Model } from 'mongoose';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { User, UserDocument } from 'src/common/models/user.model';
import { AuthService } from 'src/common/services/auth/auth.service';

@Controller('auth/profile')
export class ProfileController {
  constructor(
    private authService: AuthService
  ){}
  @Get()
  @UseGuards(JwtGuard)
  async index(@Req() req: Request, @Res() res: Response){
    return res.send({
      status: 'success',
      user: await this.authService.getUserById(req.user['userId'])
    });
  }
}
