import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { ProfileController } from './profile/profile.controller';
import { LoginController } from './login/login.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [CommonModule],
  controllers: [LoginController, ProfileController, AuthController],
  providers: [],
})
export class AuthModule {}
