import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { LIFECYCLE_STATUS } from '../../constants';

export class GetVersionResponseOkDto {
  @ApiProperty({ example: HttpStatus.OK })
    statusCode: number;

  @ApiProperty({ example: LIFECYCLE_STATUS.LIFECYCLE_OK })
    message: LIFECYCLE_STATUS;

  @ApiProperty({
    example: {
      version: '0.0.1',
    },
  })
    data: { version: string } | null;

  @ApiProperty({ example: null })
    errors: { [key: string]: string };
}
