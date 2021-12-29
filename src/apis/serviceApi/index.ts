import {
  ServiceInfoResponseBody,
  ServiceListAndCountResponseBody,
} from '@/types';

import Api from '../api';

class ServiceApi extends Api {
  async getListAndCount(): Promise<ServiceListAndCountResponseBody> {
    const response = await this.get<ServiceListAndCountResponseBody>();

    return response.data;
  }

  async deleteItem(id: string): Promise<void> {
    await this.delete({ additionalUri: `/${id}` });
  }

  async getInfo(id: string): Promise<ServiceInfoResponseBody> {
    const response = await this.get<ServiceInfoResponseBody>({
      additionalUri: `/${id}`,
    });

    return response.data;
  }

  async updateInfo(id: string, formData: FormData): Promise<void> {
    await this.patch<void, FormData>(formData, { additionalUri: `/${id}` });
  }
}

export default ServiceApi;
