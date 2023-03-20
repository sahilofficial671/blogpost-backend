import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { BlogService } from 'src/common/services/blog/blog.service';

@Controller('blog')
export class BlogController {
  constructor(
    private blogService: BlogService
  ){ };

  @Post()
  @UseGuards(JwtGuard)
  async createBlog(@Req() req){
    return await this.blogService.createBlog(req.body, req.user['userId']);
  }

  @Get()
  @UseGuards(JwtGuard)
  getBlogs(@Req() req){
    return this.blogService.getBlogs();
  }
}