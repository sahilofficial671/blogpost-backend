import { Body, Controller, Delete, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { Response } from 'express';
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

  @Get(':blogId')
  getBlog(@Req() req){
    const blog = this.blogService.getBlog(req.params.blogId);
    return blog ? blog : {message: 'Not found'};
  }

  @Get()
  getBlogs(@Req() req){
    return this.blogService.getBlogs();
  }

  @Delete(':blogId')
  @UseGuards(JwtGuard)
  async deleteBlog(@Req() req, @Res() res: Response){
    const blog = await this.blogService.getBlog(req.params.blogId);
    
    if(blog?.user['id'] == req.user['userId']){
      const response = await this.blogService.deleteBlog(req.params.blogId);

      return res.status(response['deletedCount'] == 1 ? HttpStatusCode.Ok : HttpStatusCode.InternalServerError)
        .json(response['deletedCount'] == 1 ? {
          status: 'success',
          message: 'Deleted'
        } : {
          status: 'error',
          message: 'Something went wrong!'
        });
    }

    return res.status(HttpStatusCode.NotFound)
      .json({
        status: 'error',
        message: 'Blog Not Found!'
      })
  }
}