import {
  HTTPClient,
  HTTPRequestConfig,
  HTTPResponse,
} from '@/utils/httpClient';

abstract class Api {
  protected apiUrl: string;

  protected client: HTTPClient;

  constructor(client: HTTPClient, apiUrl: string) {
    this.client = client;
    this.apiUrl = apiUrl;
  }

  async request<R = unknown, D = unknown>(
    config: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    return this.client.request<R, D>(config);
  }

  async get<R = unknown, D = unknown>(
    config?: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    return this.client.get<R, D>(this.apiUrl, config);
  }

  async delete<R = unknown, D = unknown>(
    config?: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    return this.client.delete<R, D>(this.apiUrl, config);
  }

  async post<R = unknown, D = unknown>(
    data: D,
    config?: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    return this.client.post<R, D>(this.apiUrl, data, config);
  }

  async put<R = unknown, D = unknown>(
    data: D,
    config?: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    return this.client.put<R, D>(this.apiUrl, data, config);
  }

  async patch<R = unknown, D = unknown>(
    data: Partial<D>,
    config?: HTTPRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    return this.client.patch<R, D>(this.apiUrl, data, config);
  }
}

export default Api;
