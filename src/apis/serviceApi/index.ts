import { ServiceListAndCountResponseBody } from '@/types';

import Api from '../api';

class ServiceApi extends Api {
  async getListAndCount(): Promise<ServiceListAndCountResponseBody> {
    const response = await this.get<ServiceListAndCountResponseBody>();

    return response.data;
  }

  async deleteItem(id: string): Promise<void> {
    await this.delete({ additionalUri: `/${id}` });
  }
}

export default ServiceApi;
