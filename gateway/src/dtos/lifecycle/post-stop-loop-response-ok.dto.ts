import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { LIFECYCLE_STATUS, TIME_STREAM_STATUS } from '../../constants';

export class PostStopLoopResponseOkDto {
  @ApiProperty({ example: HttpStatus.OK })
  statusCode: number;

  @ApiProperty({ example: LIFECYCLE_STATUS.LIFECYCLE_STOP_OK })
  message: LIFECYCLE_STATUS;

  @ApiProperty({
    example: {
      ticks: 37,
      done: true,
      timeStreamStatus: TIME_STREAM_STATUS.PAUSED,
    },
  })
  data: {
    ticks: number;
    done: boolean;
    timeStreamStatus: TIME_STREAM_STATUS;
  } | null;

  @ApiProperty({
    example: null,
  })
  errors: { [key: string]: string };
}
