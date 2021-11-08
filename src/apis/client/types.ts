export interface ApiResponse<D = unknown> {
  data: D;
  status: number;
}

export type HTTPMethod = 'GET' | 'DELETE' | 'POST' | 'PUT';

export type RequestHeaders = Record<string, string>;

export interface ApiRequestConfig<D = unknown> {
  url: string;
  baseURL?: string;
  method?: HTTPMethod;
  data?: D;
  headers?: RequestHeaders;
}
