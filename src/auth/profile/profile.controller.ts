import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { UserService } from 'src/common/services/user/user.service';

@Controller('auth/profile')
export class ProfileController {
  constructor(
    private userService: UserService
  ){}
  @Get()
  @UseGuards(JwtGuard)
  async index(@Req() req: Request, @Res() res: Response){
    return res
      .status(HttpStatusCode.Ok)
      .json({
        status: 'success',
        user: await this.userService.getUserById(req.user['userId'])
      });
  }
}
