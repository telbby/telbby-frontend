import { ApiRequestConfig, ApiResponse, RequestHeaders } from './types';

abstract class ApiClient {
  abstract setHeader(key: string, value: string): void;

  abstract getHeader(): RequestHeaders;

  abstract request<R = unknown, D = unknown>(
    config: ApiRequestConfig<D>,
  ): Promise<ApiResponse<R>>;

  async get<R = unknown, D = unknown>(
    url: string,
    config?: ApiRequestConfig<D>,
  ): Promise<ApiResponse<R>> {
    return this.request({ ...config, url, method: 'GET' });
  }

  async delete<R = unknown, D = unknown>(
    url: string,
    config?: ApiRequestConfig<D>,
  ): Promise<ApiResponse<R>> {
    return this.request({ ...config, url, method: 'DELETE' });
  }

  async post<R = unknown, D = unknown>(
    url: string,
    data: D,
    config?: ApiRequestConfig<D>,
  ): Promise<ApiResponse<R>> {
    return this.request({ ...config, url, data, method: 'POST' });
  }

  async put<R = unknown, D = unknown>(
    url: string,
    data: D,
    config?: ApiRequestConfig<D>,
  ): Promise<ApiResponse<R>> {
    return this.request({ ...config, url, data, method: 'PUT' });
  }
}

export default ApiClient;
