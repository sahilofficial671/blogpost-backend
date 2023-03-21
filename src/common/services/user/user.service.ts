import { Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/common/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ){ }

  async getUserById(userId: any){
    return await this.userModel
      .findById(userId, {}, {
        fields: ['_id', 'name', 'email']
      }).populate('blogs', 'title createdAt');
  }
}
