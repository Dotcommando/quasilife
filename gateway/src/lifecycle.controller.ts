import { Controller, Get, HttpStatus, Inject, Post, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiPreconditionFailedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { firstValueFrom } from 'rxjs';

import { Response } from 'express';

import { LIFECYCLE_EVENT, LIFECYCLE_STATUS, TIME_STREAM_STATUS } from './constants';
import {
  GetTicksResponseOkDto,
  GetTicksResponsePreconditionFailedDto,
  GetVersionResponseOkDto,
  PostStartLoopResponseOkDto,
  PostStartLoopResponsePreconditionFailedDto,
  PostStopLoopResponseOkDto,
  PostStopLoopResponsePreconditionFailedDto,
} from './dtos/lifecycle';
import { IResponse, LifecycleActionReport } from './interfaces';
import { LifecycleService } from './services';

@Controller('lifecycle')
@ApiTags('lifecycle')
export class LifecycleController {
  constructor(
    private readonly configService: ConfigService,
    private readonly lifecycleService: LifecycleService,
    @Inject('LIFECYCLE_SERVICE') private readonly lifecycleServiceClient: ClientProxy,
  ) {}

  @Get('version')
  @ApiOkResponse({
    type: GetVersionResponseOkDto,
  })
  @ApiNotFoundResponse({
    type: GetVersionResponseOkDto,
  })
  public getVersion(@Res() res: Response): void {
    const version = this.configService?.get('version') ?? null;
    const response: IResponse<{ version: string | null }, LIFECYCLE_STATUS> = version
      ? {
        statusCode: HttpStatus.OK,
        message: LIFECYCLE_STATUS.LIFECYCLE_GET_VERSION_OK,
        data: { version },
        errors: null,
      }
      : {
        statusCode: HttpStatus.NOT_FOUND,
        message: LIFECYCLE_STATUS.LIFECYCLE_GET_VERSION_NOT_FOUND,
        data: null,
        errors: {
          version: 'Cannot find version',
        },
      };

    res
      .status(response.statusCode)
      .json(response);
  };

  @Post('start')
  @ApiOkResponse({
    type: PostStartLoopResponseOkDto,
  })
  @ApiPreconditionFailedResponse({
    type: PostStartLoopResponsePreconditionFailedDto,
  })
  public async startLoop(@Res() res: Response): Promise<void> {
    try {
      const response: LifecycleActionReport = await firstValueFrom(
        this.lifecycleServiceClient.send(LIFECYCLE_EVENT.LIFECYCLE_START, {}),
      );

      const finalResponse: LifecycleActionReport = response
        ? {
          statusCode: response.statusCode,
          message: response.message,
          data: response.data,
          errors: response.errors,
        }
        : {
          statusCode: HttpStatus.PRECONDITION_FAILED,
          message: LIFECYCLE_STATUS.LIFECYCLE_START_PRECONDITION_FAILED,
          data: null,
          errors: {
            start: 'Cannot start loop',
          },
        };

      res
        .status(finalResponse.statusCode)
        .json(finalResponse);
    } catch (e) {
      res
        .status(HttpStatus.PRECONDITION_FAILED)
        .json(
          {
            statusCode: HttpStatus.PRECONDITION_FAILED,
            message: LIFECYCLE_STATUS.LIFECYCLE_START_PRECONDITION_FAILED,
            data: null,
            errors: {
              start: 'Cannot start loop',
            },
          },
        );
    }
  }

  @Post('stop')
  @ApiOkResponse({
    type: PostStopLoopResponseOkDto,
  })
  @ApiPreconditionFailedResponse({
    type: PostStopLoopResponsePreconditionFailedDto,
  })
  public async stopLoop(@Res() res: Response): Promise<void> {
    try {
      const response: LifecycleActionReport = await firstValueFrom(
        this.lifecycleServiceClient.send(LIFECYCLE_EVENT.LIFECYCLE_STOP, {}),
      );

      const finalResponse: LifecycleActionReport = response
        ? {
          statusCode: response.statusCode,
          message: response.message,
          data: response.data,
          errors: response.errors,
        }
        : {
          statusCode: HttpStatus.PRECONDITION_FAILED,
          message: LIFECYCLE_STATUS.LIFECYCLE_STOP_PRECONDITION_FAILED,
          data: null,
          errors: {
            stop: 'Cannot stop loop',
          },
        };

      res
        .status(finalResponse.statusCode)
        .json(finalResponse);
    } catch (e) {
      res
        .status(HttpStatus.PRECONDITION_FAILED)
        .json(
          {
            statusCode: HttpStatus.PRECONDITION_FAILED,
            message: LIFECYCLE_STATUS.LIFECYCLE_STOP_PRECONDITION_FAILED,
            data: null,
            errors: {
              stop: 'Cannot stop loop',
            },
          },
        );
    }
  }

  @Get('ticks')
  @ApiOkResponse({
    type: GetTicksResponseOkDto,
  })
  @ApiPreconditionFailedResponse({
    type: GetTicksResponsePreconditionFailedDto,
  })
  public async getTickNumber(@Res() res: Response): Promise<void> {
    try {
      const response: IResponse<{ ticks: number; timeStreamStatus: TIME_STREAM_STATUS }, LIFECYCLE_STATUS> = await firstValueFrom(
        this.lifecycleServiceClient.send(LIFECYCLE_EVENT.LIFECYCLE_GET_TICK_NUMBER, {}),
      );

      const finalResponse: IResponse<{ ticks: number }, LIFECYCLE_STATUS> = response
        ? {
          statusCode: response.statusCode,
          message: response.message,
          data: response.data,
          errors: response.errors,
        }
        : {
          statusCode: HttpStatus.PRECONDITION_FAILED,
          message: LIFECYCLE_STATUS.LIFECYCLE_GET_TICK_NUMBER_PRECONDITION_FAILED,
          data: null,
          errors: {
            ticks: 'Cannot get ticks number',
          },
        };

      res
        .status(finalResponse.statusCode)
        .json(finalResponse);
    } catch (e) {
      res
        .status(HttpStatus.PRECONDITION_FAILED)
        .json(
          {
            statusCode: HttpStatus.PRECONDITION_FAILED,
            message: LIFECYCLE_STATUS.LIFECYCLE_GET_TICK_NUMBER_PRECONDITION_FAILED,
            data: null,
            errors: {
              ticks: 'Cannot get ticks number',
            },
          },
        );
    }
  }
}
