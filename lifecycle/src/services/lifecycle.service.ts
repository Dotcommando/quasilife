import { Injectable } from '@nestjs/common';

import { TIME_STREAM_STATUS } from '../constants';

@Injectable()
export class LifecycleService {
  constructor() {}

  private timeoutRef: ReturnType<typeof setTimeout>;
  private timesTicked = 0;
  private timeStreamStatus: TIME_STREAM_STATUS = TIME_STREAM_STATUS.DID_NOT_START;

  public getTimesTicked(): number {
    return this.timesTicked;
  }

  private makeIncrement(): void {
    this.timeStreamStatus = TIME_STREAM_STATUS.IS_FLOWING;
    this.timeoutRef = setTimeout((function() {
      this.timesTicked++;

      this.makeIncrement();
    }).bind(this), 1000);
  }

  public startLoop() {
    this.makeIncrement();
  }

  public stopLoop(): void {
    clearTimeout(this.timeoutRef);
    this.timeStreamStatus = TIME_STREAM_STATUS.PAUSED;
  }

  public getTimeStreamStatus(): TIME_STREAM_STATUS {
    return this.timeStreamStatus;
  }
}
