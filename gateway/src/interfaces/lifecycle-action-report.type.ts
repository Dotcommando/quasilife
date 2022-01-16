import { LIFECYCLE_STATUS, TIME_STREAM_STATUS } from '../constants';
import { IResponse } from './response.interface';

export type LifecycleActionReport = IResponse<{
  done: boolean;
  ticks: number;
  timeStreamStatus: TIME_STREAM_STATUS;
}, LIFECYCLE_STATUS>;
