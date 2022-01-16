import { Controller, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessagePattern } from '@nestjs/microservices';

import { LIFECYCLE_EVENT, LIFECYCLE_STATUS, TIME_STREAM_STATUS } from './constants';
import { IResponse, LifecycleActionReport } from './interfaces';
import { LifecycleService } from './services';


@Controller('lifecycle')
export class LifecycleController {
  constructor(
    private readonly config: ConfigService,
    private readonly lifecycleService: LifecycleService,
  ) {}

  @MessagePattern(LIFECYCLE_EVENT.LIFECYCLE_START)
  public async startLoop(): Promise<LifecycleActionReport> {
    this.lifecycleService.startLoop();

    return {
      statusCode: HttpStatus.OK,
      message: LIFECYCLE_STATUS.LIFECYCLE_START_OK,
      data: {
        ticks: this.lifecycleService.getTimesTicked(),
        timeStreamStatus: this.lifecycleService.getTimeStreamStatus(),
        done: true,
      },
      errors: null,
    };
  }

  @MessagePattern(LIFECYCLE_EVENT.LIFECYCLE_STOP)
  public async stopLoop(): Promise<LifecycleActionReport> {
    this.lifecycleService.stopLoop();

    return {
      statusCode: HttpStatus.OK,
      message: LIFECYCLE_STATUS.LIFECYCLE_STOP_OK,
      data: {
        ticks: this.lifecycleService.getTimesTicked(),
        timeStreamStatus: this.lifecycleService.getTimeStreamStatus(),
        done: true,
      },
      errors: null,
    };
  }

  @MessagePattern(LIFECYCLE_EVENT.LIFECYCLE_GET_TICK_NUMBER)
  public async getTickNumber(): Promise<IResponse<{ ticks: number; timeStreamStatus: TIME_STREAM_STATUS }, LIFECYCLE_STATUS>> {
    return {
      statusCode: HttpStatus.OK,
      message: LIFECYCLE_STATUS.LIFECYCLE_GET_TICK_NUMBER_OK,
      data: {
        ticks: this.lifecycleService.getTimesTicked(),
        timeStreamStatus: this.lifecycleService.getTimeStreamStatus(),
      },
      errors: null,
    };
  }
}
