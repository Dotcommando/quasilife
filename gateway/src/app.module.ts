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
  controllers: [
    LifecycleController,
  ],
  providers: [
    ConfigService,
    LifecycleService,
    {
      provide: 'LIFECYCLE_SERVICE',
      useFactory: (configService: ConfigService) => {
        const lifecycleServiceOptions = configService.get('lifecycleService');
        return ClientProxyFactory.create(lifecycleServiceOptions);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
