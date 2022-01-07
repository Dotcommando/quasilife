import { Injectable } from '@nestjs/common';

@Injectable()
export class LifecycleService {
  constructor() {}

  private timeoutLink: ReturnType<typeof setTimeout>;
  private timesTicked = 0;

  public getTimesTicked(): number {
    return this.timesTicked;
  }

  private makeIncrement(): void {
    this.timeoutLink = setTimeout((function() {
      this.timesTicked++;

      this.makeIncrement();
    }).bind(this), 1000);
  }

  public startLoop() {
    this.makeIncrement();
  }

  public stopLoop(): void {
    clearTimeout(this.timeoutLink);
  }
}
