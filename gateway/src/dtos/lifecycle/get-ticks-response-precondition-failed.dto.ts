import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { LIFECYCLE_STATUS, TIME_STREAM_STATUS } from '../../constants';

export class GetTicksResponsePreconditionFailedDto {
  @ApiProperty({ example: HttpStatus.PRECONDITION_FAILED })
  statusCode: number;

  @ApiProperty({ example: LIFECYCLE_STATUS.LIFECYCLE_GET_TICK_NUMBER_PRECONDITION_FAILED })
  message: LIFECYCLE_STATUS;

  @ApiProperty({ example: null })
  data: {
    ticks: number;
    timeStreamStatus: TIME_STREAM_STATUS;
  } | null;

  @ApiProperty({
    example: {
      ticks: 'Cannot get ticks number',
    },
  })
  errors: { [key: string]: string };
}
