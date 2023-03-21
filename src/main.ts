import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import * as cors from 'cors';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use([morgan('dev'), cors()])
  // app.enableCors();

  await app.listen(process.env.APP_PORT);
}
bootstrap();
