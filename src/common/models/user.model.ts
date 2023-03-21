import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId, SchemaTypes } from 'mongoose';
import { Blog } from './blog.model';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop({
    type: SchemaTypes.ObjectId
  })
  _id: Number;
  
  @Prop()
  name: string;
  
  @Prop({
    required: [true, 'Please rovide a valid email.'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  })
  email: string;


  @Prop([{
    type: mongoose.Schema.Types.ObjectId, ref: 'Blog'
  }])
  blogs: Blog[]
}

export const UserSchema = SchemaFactory.createForClass(User);