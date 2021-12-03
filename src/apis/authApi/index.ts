import { AuthResponseBody, LoginRequestBody } from '@/types';

import Api from '../api';

class AuthApi extends Api {
  private readonly ACCESS_TOKEN_HEADER = 'Authorization';

  private setAccessToken(accessToken: string): void {
    this.client.setHeader(this.ACCESS_TOKEN_HEADER, `Bearer ${accessToken}`);
  }

  private clearAccessToken(): void {
    this.client.setHeader(this.ACCESS_TOKEN_HEADER, '');
  }

  async login(reqData: LoginRequestBody): Promise<AuthResponseBody> {
    const response = await this.post<AuthResponseBody, LoginRequestBody>(
      reqData,
    );

    const { access } = response.data;
    this.setAccessToken(access);

    return response.data;
  }

  async logout(): Promise<void> {
    await this.delete<void>();
    this.clearAccessToken();
  }

  async refresh(): Promise<AuthResponseBody> {
    const response = await this.get<AuthResponseBody>();

    const { access } = response.data;
    this.setAccessToken(access);

    return response.data;
  }
}

export default AuthApi;
