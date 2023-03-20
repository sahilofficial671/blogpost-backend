import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Blog, BlogDocument } from 'src/common/models/blog.model';
import { User, UserDocument } from 'src/common/models/user.model';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<BlogDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ){ }

  async createBlog(blog: Object, userId: ObjectId) {
    return await this.blogModel.create({
      ...blog,
      user: userId
    }).then((blog) => {

      // Save blog to user
      this.userModel
        .findById(userId).then((user) => {
        user.blogs.push(blog);
        user.save();
      });

      return blog.populate('user');
    });
  }

  getBlogs() {
    return this.blogModel
      .find({})
      .populate('user', '_id, name')
      .sort([['updatedAt', 'desc']])
      .limit(7);
  }
}
