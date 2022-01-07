import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { LIFECYCLE_STATUS } from '../../constants';

export class GetVersionResponseNotFoundDto {
  @ApiProperty({ example: HttpStatus.NOT_FOUND })
    statusCode: number;

  @ApiProperty({ example: LIFECYCLE_STATUS.LIFECYCLE_NOT_FOUND })
    message: LIFECYCLE_STATUS;

  @ApiProperty({ example: null })
    data: { version: string } | null;

  @ApiProperty({
    example: {
      version: 'Cannot find version',
    },
  })
    errors: { [key: string]: string };
}
