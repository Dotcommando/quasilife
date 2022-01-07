import { Controller, Get, HttpStatus, Inject, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { LIFECYCLE_STATUS } from './constants';
import { GetVersionResponseOkDto } from './dtos/lifecycle';
import { IResponse } from './interfaces';
import { LifecycleService } from './services';
import { Response } from 'express';

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
        message: LIFECYCLE_STATUS.LIFECYCLE_OK,
        data: { version },
        errors: null,
      }
      : {
        statusCode: HttpStatus.NOT_FOUND,
        message: LIFECYCLE_STATUS.LIFECYCLE_NOT_FOUND,
        data: null,
        errors: {
          version: 'Cannot find version',
        },
      };

    res
      .status(response.statusCode)
      .send(response);
  };
}
