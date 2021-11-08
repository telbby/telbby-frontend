import { AxiosInstance, AxiosRequestConfig } from 'axios';

import ApiClient from './apiClient';
import ApiError from './apiError';
import { ApiRequestConfig, ApiResponse, RequestHeaders } from './types';

export class AxiosApiClient extends ApiClient {
  private readonly client: AxiosInstance;

  private defaultRequestConfig: AxiosRequestConfig;

  constructor(client: AxiosInstance, defaultConfig?: AxiosRequestConfig) {
    super();
    this.client = client;
    this.defaultRequestConfig = defaultConfig;
  }

  async request<R = unknown, D = unknown>(
    config: ApiRequestConfig<D>,
  ): Promise<ApiResponse<R>> {
    try {
      const requestConfig = { ...this.defaultRequestConfig, ...config };
      const response = await this.client(requestConfig);

      const { data, status } = response;

      return { data, status };
    } catch (e) {
      const apiErrorResponse: ApiResponse<D> = {
        data: e.response?.data,
        status: e.response?.status,
      };

      throw new ApiError({
        message: e.message,
        response: e.response ? apiErrorResponse : undefined,
      });
    }
  }

  setHeader(key: string, value: string): void {
    this.defaultRequestConfig.headers[key] = value;
  }

  getHeader(): RequestHeaders {
    return this.defaultRequestConfig.headers;
  }
}
