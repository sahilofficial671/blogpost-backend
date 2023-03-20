import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { BlogController } from './blog/blog.controller';

@Module({
  imports: [CommonModule],
  controllers: [BlogController]
})
export class BlogModule {}
