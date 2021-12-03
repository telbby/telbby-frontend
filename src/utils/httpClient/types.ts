export interface HTTPResponse<D = unknown> {
  data: D;
  status: number;
}

export type HTTPMethod = 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';

export type RequestHeaders = Record<string, string>;

export interface HTTPRequestConfig<D = unknown> {
  url: string;
  baseURL?: string;
  method?: HTTPMethod;
  data?: D;
  headers?: RequestHeaders;
}
