import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';

import configuration from './config';
import { LifecycleController } from './lifecycle.controller';
import { LifecycleService } from './services';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [LifecycleController],
  providers: [
    ConfigService,
    LifecycleService,
  ],
})
export class LifecycleModule {}
