import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService,
    private jwtService: JwtService,
  ){ }

  async login(user) {
    const response = await firstValueFrom(this.httpService.get('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + user.idToken))

    console.log("Response => ", response);

    const {data} = response;

    if(data.sub){
      const payload = { name: data.name, sub: data.sub};
      const accessToken = this.jwtService.sign(payload);
      
      return {
        accessToken
      };
    }

    return {};
  }
}
