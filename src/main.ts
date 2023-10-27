import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('/api');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  setupSwagger(app);
  await app.listen(process.env.PORT || 5050);
}
bootstrap();
