# Blogpost Backend
![Github](https://github.com/sahilofficial671/blogpost-backend/actions/workflows/build.yml/badge.svg)
This is blogpost's project backend. It handle blog and users.

#### Deployment
##### Deployed On: AWS via Github Actions
##### Deployed At: https://blogpost-backend.webiggle.com/

## Built with
- NestJS
- PassportJS
- Mongoose

## API
- [Authentication](#authentication)
  - [Login](#login)
  - [Profile](#profile)
- [Blogs](#blogs)
  - [Create a Blog](#create-a-blog)
  - [Get all Blogs](#get-all-blogs)
  - [Get a Blogs](#get-a-blog)
  - [Delete a Blog](#delete-a-blog)

## Authentication
### Login
    - Method: POST
    - URL: /auth/login
    - Request Data:  ``{"idToken": "your google id token"}``
    - Return: User model
    
### Profile
    - Method: GET
    - URL: /auth/profile
    - Headers: Authorization (Bearer Token)
    - Return: User model
    
## Blogs
### Create a Blog
    - Method: POST
    - URL: /blog
    - Headers: Authorization (Bearer Token)
    - Body:
    `{
      "title": "Sample Blog" // Title of the blog.
      "description": "Sample Blog Description" // Descrition of the blog,
    }`
    - Return: Blog
    `[
      {
        "_id" // Blog ID,
        "title": // Title of the blog,
        "description" // Descrition of the blog,
        "user" // User who created this blog
        "createdAt" // Blog's Created At,
        "updatedAt" // Blog's Updated At
      }
    ]`
### Get All Blogs
    - Method: GET
    - URL: /blog
    - Return: Blog[]
    `[
      {
        "_id" // Blog ID,
        "title": // Title of the blog,
        "description" // Descrition of the blog,
        "user" // User who created this blog
        "createdAt" // Blog's Created At,
        "updatedAt" // Blog's Updated At
      }
    ]`
### Get a Blog
    - Method: GET
    - URL: /blog/:blogId
    - Return: Blog
    `{
      "_id" // Blog ID,
      "title": // Title of the blog,
      "description" // Descrition of the blog,
      "user" // User who created this blog
      "createdAt" // Blog's Created At,
      "updatedAt" // Blog's Updated At
    }`
### Delete a Blog
    - Method: Delete
    - URL: /blog/:blogId
    - Headers: Authorization (Bearer Token)
    - Return: Blog
    `{
      "status": "Success",
      "message": "Deleted"
    }`

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
