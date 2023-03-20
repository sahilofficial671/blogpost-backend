import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from 'src/common/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService,
    private jwtService: JwtService,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ){ }

  async login(params) {
    try {
      const response = await firstValueFrom(this.httpService.get('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + params.idToken))
  
      const {data} = response;

      console.log("Response ===> ", data);

      if(data.sub){
        let user = await this.userModel.findOneAndUpdate({
          email: data.email
        }, {
          name: data.name
        }, {
          new: true,
          fields: ['_id', 'email', 'name'],
        }).exec();
  
        let newUserCreated = false;

        if(! user){
          user = await this.userModel.create({
            email: data.email,
            name: data.name
          });

          newUserCreated = true;
        }

        console.log('User: ', user);
        
        const payload = { name: data.name, sub: user['_id']};
        const accessToken = this.jwtService.sign(payload);

        return {
          user,
          newUserCreated,
          accessToken
        };
      }
    } catch (e) {
        console.log(e);

        return e;
    }

    return null;
  }
}
