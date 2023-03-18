import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { ProfileController } from './profile/profile.controller';
import { LoginController } from './login/login.controller';

@Module({
  imports: [CommonModule],
  controllers: [LoginController, ProfileController],
  providers: [],
})
export class AuthModule {}
