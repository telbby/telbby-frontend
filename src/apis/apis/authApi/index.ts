import { AuthResponseBody, LoginRequestBody } from '../../dto/auth';
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
    const response = await this.client.post<AuthResponseBody>(
      this.apiUrl,
      reqData,
    );

    const { access } = response.data;
    this.setAccessToken(access);

    return response.data;
  }

  async logout(): Promise<void> {
    await this.client.delete<void>(this.apiUrl);
    this.clearAccessToken();
  }

  async refresh(): Promise<AuthResponseBody> {
    const response = await this.client.get<AuthResponseBody>(this.apiUrl);

    const { access } = response.data;
    this.setAccessToken(access);

    return response.data;
  }
}

export default AuthApi;
