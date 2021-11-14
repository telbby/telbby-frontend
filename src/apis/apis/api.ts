import { HTTPClient } from '../../utils/httpClient';

abstract class Api {
  protected apiUrl: string;

  protected client: HTTPClient;

  constructor(client: HTTPClient, apiUrl: string) {
    this.client = client;
    this.apiUrl = apiUrl;
  }
}

export default Api;
