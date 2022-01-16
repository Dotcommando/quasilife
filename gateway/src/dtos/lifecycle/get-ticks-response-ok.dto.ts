import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { LIFECYCLE_STATUS, TIME_STREAM_STATUS } from '../../constants';

export class GetTicksResponseOkDto {
  @ApiProperty({ example: HttpStatus.OK })
  statusCode: number;

  @ApiProperty({ example: LIFECYCLE_STATUS.LIFECYCLE_GET_TICK_NUMBER_OK })
  message: LIFECYCLE_STATUS;

  @ApiProperty({
    example: {
      ticks: 37,
      timeStreamStatus: TIME_STREAM_STATUS.IS_FLOWING,
    },
  })
  data: {
    ticks: number;
    timeStreamStatus: TIME_STREAM_STATUS;
  } | null;

  @ApiProperty({ example: null })
  errors: { [key: string]: string };
}
