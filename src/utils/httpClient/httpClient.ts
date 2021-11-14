import { HTTPRequestConfig, HTTPResponse, RequestHeaders } from './types';

abstract class HTTPClient {
  abstract setHeader(key: string, value: string): void;

  abstract getHeader(): RequestHeaders;

  abstract request<R = unknown, D = unknown>(
    config: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>>;

  async get<R = unknown, D = unknown>(
    url: string,
    config?: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    return this.request({ ...config, url, method: 'GET' });
  }

  async delete<R = unknown, D = unknown>(
    url: string,
    config?: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    return this.request({ ...config, url, method: 'DELETE' });
  }

  async post<R = unknown, D = unknown>(
    url: string,
    data: D,
    config?: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    return this.request({ ...config, url, data, method: 'POST' });
  }

  async put<R = unknown, D = unknown>(
    url: string,
    data: D,
    config?: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    return this.request({ ...config, url, data, method: 'PUT' });
  }
}

export default HTTPClient;
