import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { LIFECYCLE_STATUS, TIME_STREAM_STATUS } from '../../constants';

export class PostStartLoopResponseOkDto {
  @ApiProperty({ example: HttpStatus.OK })
  statusCode: number;

  @ApiProperty({ example: LIFECYCLE_STATUS.LIFECYCLE_START_OK })
  message: LIFECYCLE_STATUS;

  @ApiProperty({
    example: {
      ticks: 0,
      done: true,
      timeStreamStatus: TIME_STREAM_STATUS.IS_FLOWING,
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
