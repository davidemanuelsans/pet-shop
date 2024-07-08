import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const validationPipe = new ValidationPipe({
  whitelist: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(process.env.APP_NAME)
  app.useGlobalPipes(validationPipe)

  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
