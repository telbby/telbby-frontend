import { HTTPRequestConfig } from '@/utils/httpClient';

export interface ApiRequestConfig<D> extends Omit<HTTPRequestConfig<D>, 'url'> {
  additionalUrl?: string;
}
