export interface IResponse<T, U = string> {
  statusCode: number;
  message: U;
  data: T | null;
  errors: { [key: string]: string } | null;
}
