import { LoginRequestBody } from '../../dto/auth';
import { UpdateInfoResponseBody } from '../../dto/users';
import Api from '../api';

class UsersApi extends Api {
  async signup(reqData: LoginRequestBody): Promise<UpdateInfoResponseBody> {
    const response = await this.client.post<UpdateInfoResponseBody>(
      this.apiUrl,
      reqData,
    );

    return response.data;
  }
}

export default UsersApi;
