import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';






import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { createDecipheriv } from 'crypto';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  var cors = require('cors');
  app.use(cors());
  await app.listen(3000);
}
bootstrap();
