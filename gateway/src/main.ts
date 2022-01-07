import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

import { AppModule } from './app.module';
import { PROTOCOL } from './constants';

async function bootstrap() {
  const server = express();

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server),
    {
      cors: true,
    },
  );
  const protocol = process.env.ENVIRONMENT === 'prod' ? PROTOCOL.HTTPS : PROTOCOL.HTTP;
  const origin = protocol + process.env.GATEWAY_HOST;

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api/v1');
  app.use(cookieParser());
  app.use(helmet());
  app.enableCors({ origin });

  if (process.env.SWAGGER_ENABLED === 'true') {
    const options = new DocumentBuilder()
      .setTitle('API docs')
      .addServer(protocol)
      .addTag('lifecycle')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }

  if (process.env.ENVIRONMENT === 'dev') {
    app.use(morgan('tiny'));
  }

  await app.listen(process.env.GATEWAY_PORT);
}

bootstrap();
