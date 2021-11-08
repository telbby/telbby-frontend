import { ApiClient } from '../client';

abstract class Api {
  protected apiUrl: string;

  protected client: ApiClient;

  constructor(client: ApiClient, apiUrl: string) {
    this.client = client;
    this.apiUrl = apiUrl;
  }
}

export default Api;
