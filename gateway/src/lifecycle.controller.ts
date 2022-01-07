import { Controller, Get, HttpStatus, Inject, Post, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { firstValueFrom } from 'rxjs';

import { Response } from 'express';

import { LIFECYCLE_EVENT, LIFECYCLE_STATUS } from './constants';
import { GetVersionResponseOkDto } from './dtos/lifecycle';
import { IResponse } from './interfaces';
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
  public async startLoop(@Res() res: Response): Promise<void> {
    try {
      const response: IResponse<{ done: boolean; ticks: number }, LIFECYCLE_STATUS> = await firstValueFrom(
        this.lifecycleServiceClient.send(LIFECYCLE_EVENT.LIFECYCLE_START, {}),
      );

      const finalResponse: IResponse<{ done: boolean }, LIFECYCLE_STATUS> = response
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
  public async stopLoop(@Res() res: Response): Promise<void> {
    try {
      const response: IResponse<{ done: boolean; ticks: number }, LIFECYCLE_STATUS> = await firstValueFrom(
        this.lifecycleServiceClient.send(LIFECYCLE_EVENT.LIFECYCLE_STOP, {}),
      );

      const finalResponse: IResponse<{ done: boolean }, LIFECYCLE_STATUS> = response
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
            start: 'Cannot stop loop',
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
              start: 'Cannot stop loop',
            },
          },
        );
    }
  }

  @Get('ticks')
  public async getTickNumber(@Res() res: Response): Promise<void> {
    try {
      const response: IResponse<{ ticks: number }, LIFECYCLE_STATUS> = await firstValueFrom(
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
