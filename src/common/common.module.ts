import { Module } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './utils/jwt.strategy';
import { User, UserSchema } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.APP_SECRET,
      signOptions: { expiresIn: process.env.APP_SESSION_TIMEOUT },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [],
  providers: [
    AuthService,
    JwtStrategy
  ],
  exports: [
    AuthService
  ],  
})
export class CommonModule {}
