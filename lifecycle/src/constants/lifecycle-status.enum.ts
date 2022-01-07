export enum LIFECYCLE_STATUS {
  LIFECYCLE_GET_VERSION_OK = 'lifecycle_get_version_ok',
  LIFECYCLE_GET_VERSION_NOT_FOUND = 'lifecycle_get_version_not_found',
  LIFECYCLE_START_OK = 'lifecycle_start_ok',
  LIFECYCLE_START_PRECONDITION_FAILED = 'lifecycle_start_precondition_failed',
  LIFECYCLE_STOP_OK = 'lifecycle_stop_ok',
  LIFECYCLE_STOP_PRECONDITION_FAILED = 'lifecycle_stop_precondition_failed',
  LIFECYCLE_GET_TICK_NUMBER_OK = 'lifecycle_get_tick_number_ok',
  LIFECYCLE_GET_TICK_NUMBER_NOT_FOUND = 'lifecycle_get_tick_number_not_found',
  LIFECYCLE_GET_TICK_NUMBER_PRECONDITION_FAILED = 'lifecycle_get_tick_number_precondition_failed',
}
