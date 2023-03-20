import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './common/models/user.model';
import { Connection, Schema } from 'mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_PATH),
    MongooseModule.forFeature([
      {name: User.name, schema: UserSchema}
    ]),
    AuthModule,
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
