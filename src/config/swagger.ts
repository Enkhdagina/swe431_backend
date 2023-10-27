import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('Dagina SWE431')
  .setDescription('Swagger')
  .setVersion('1.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'Authorization',
      in: 'header',
    },
    'access-token',
  )
  .build();
const options: SwaggerDocumentOptions = {
  operationIdFactory: (_controllerKey: string, methodKey: string) => methodKey,
};
const customOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    tagsSorter: 'alpha',
  },
  customSiteTitle: 'Swagger API',
};

export const setupSwagger = (app: INestApplication) => {
  const document = SwaggerModule.createDocument(app, config, options);
  return SwaggerModule.setup('/docs', app, document, customOptions);
};
