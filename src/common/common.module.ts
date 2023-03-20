import { Module } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './utils/jwt.strategy';
import { User, UserSchema } from './models/user.model';
import { Blog, BlogSchema } from './models/blog.model';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogService } from './services/blog/blog.service';
import { UserService } from './services/user/user.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.APP_SECRET,
      signOptions: { expiresIn: process.env.APP_SESSION_TIMEOUT },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [],
  providers: [
    AuthService,
    JwtStrategy,
    BlogService,
    UserService
  ],
  exports: [
    AuthService,
    BlogService,
    UserService
  ],  
})
export class CommonModule {}
