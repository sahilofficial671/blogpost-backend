import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.model';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Blog {
  @Prop()
  title: string;

  @Prop()
  description: string;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User
}
export const BlogSchema = SchemaFactory.createForClass(Blog);