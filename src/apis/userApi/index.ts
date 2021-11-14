import { LoginRequestBody, UpdateInfoResponseBody } from '@/types';
import Api from '../api';

class UserApi extends Api {
  async signup(reqData: LoginRequestBody): Promise<UpdateInfoResponseBody> {
    const response = await this.client.post<UpdateInfoResponseBody>(
      this.apiUrl,
      reqData,
    );

    return response.data;
  }
}

export default UserApi;
