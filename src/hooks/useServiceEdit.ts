import { useEffect, useState } from 'react';

import { serviceApi } from '@/apis';
import {
  NETWORK_ERROR,
  NOT_FOUND_ERROR,
  UNEXPECTED_ERROR,
} from '@/constants/error';
import { ServiceInfo } from '@/types';

const useServiceEdit = (
  serviceId: string,
): {
  isLoading: boolean;
  error: string;
  serviceInfo: ServiceInfo;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [serviceInfo, setServiceInfo] = useState<ServiceInfo | null>(null);

  const getServiceInfo = async () => {
    try {
      setIsLoading(true);

      const {
        id,
        name,
        clientId,
        description,
        domain,
        image,
        question,
        theme,
      } = await serviceApi.getInfo(serviceId);
      setServiceInfo({
        id,
        name,
        clientId,
        description: description || '',
        domain: domain || '',
        profileImg: image || '',
        firstQuestion: question || '',
        theme: theme.id,
      });
    } catch (e) {
      if (e.response) {
        if (e.response.status === 404) {
          setError(NOT_FOUND_ERROR);
        } else {
          setError(UNEXPECTED_ERROR);
        }
      } else {
        setError(NETWORK_ERROR);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getServiceInfo();
  }, []);

  return {
    isLoading,
    error,
    serviceInfo,
  };
};

export default useServiceEdit;
