import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { LifecycleModule } from './lifecycle.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(LifecycleModule, {
    transport: Transport.TCP,
    options: {
      host: process.env.LIFECYCLE_SERVICE_HOST,
      port: process.env.LIFECYCLE_SERVICE_PORT,
    },
  });

  await app.listen();
}

bootstrap();
