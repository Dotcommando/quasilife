import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { LIFECYCLE_STATUS, TIME_STREAM_STATUS } from '../../constants';

export class PostStopLoopResponsePreconditionFailedDto {
  @ApiProperty({ example: HttpStatus.PRECONDITION_FAILED })
  statusCode: number;

  @ApiProperty({ example: LIFECYCLE_STATUS.LIFECYCLE_STOP_PRECONDITION_FAILED })
  message: LIFECYCLE_STATUS;

  @ApiProperty({
    example: null,
  })
  data: {
    ticks: number;
    done: boolean;
    timeStreamStatus: TIME_STREAM_STATUS;
  } | null;

  @ApiProperty({
    example: {
      stop: 'Cannot stop loop',
    },
  })
  errors: { [key: string]: string };
}
