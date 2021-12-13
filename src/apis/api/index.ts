import { AuthResponseBody } from '@/types';
import { HTTPClient, HTTPResponse } from '@/utils/httpClient';
import { ApiRequestConfig } from './types';

abstract class Api {
  private readonly ACCESS_TOKEN_HEADER = 'Authorization';

  private apiUrl: string;

  protected client: HTTPClient;

  constructor(client: HTTPClient, apiUrl: string) {
    this.client = client;
    this.apiUrl = apiUrl;
  }

  protected setAccessToken(accessToken: string): void {
    this.client.setHeader(this.ACCESS_TOKEN_HEADER, `Bearer ${accessToken}`);
  }

  protected clearAccessToken(): void {
    this.client.setHeader(this.ACCESS_TOKEN_HEADER, '');
  }

  private async requestWithSilentRefresh<R = unknown>(
    request: () => Promise<HTTPResponse<R & Partial<AuthResponseBody>>>,
  ): Promise<HTTPResponse<R>> {
    const response = await request();

    const { access = '', requestAgain = false } = response.data;

    if (access) this.setAccessToken(access);
    if (!requestAgain) return response;

    return request();
  }

  async get<R = unknown, D = unknown>(
    config?: ApiRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () => this.client.get<R, D>(url, config);

    return this.requestWithSilentRefresh<R>(request);
  }

  async delete<R = unknown, D = unknown>(
    config?: ApiRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () => this.client.delete<R, D>(url, config);

    return this.requestWithSilentRefresh<R>(request);
  }

  async post<R = unknown, D = unknown>(
    data: D,
    config?: ApiRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () => this.client.post<R, D>(url, data, config);

    return this.requestWithSilentRefresh<R>(request);
  }

  async put<R = unknown, D = unknown>(
    data: D,
    config?: ApiRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () => this.client.put<R, D>(url, data, config);

    return this.requestWithSilentRefresh<R>(request);
  }

  async patch<R = unknown, D = unknown>(
    data: Partial<D>,
    config?: ApiRequestConfig<D>,
  ): Promise<HTTPResponse<R>> {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () => this.client.patch<R, D>(url, data, config);

    return this.requestWithSilentRefresh<R>(request);
  }
}

export * from './types';
export default Api;
