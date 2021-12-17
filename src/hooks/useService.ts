import { useEffect, useState } from 'react';

import { serviceApi } from '@/apis';
import { NETWORK_ERROR, UNEXPECTED_ERROR } from '@/constants/error';
import { ServiceBasicInfo } from '@/types';

const useService = (): {
  isLoading: boolean;
  error: string;
  serviceInfo: { count: number; serviceList: ServiceBasicInfo[] };
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [serviceInfo, setServiceInfo] = useState({
    count: 0,
    serviceList: [],
  });

  const getServiceListAndCount = async () => {
    try {
      setIsLoading(true);

      const { count, projectList } = await serviceApi.getListAndCount();
      setServiceInfo({
        count,
        serviceList: projectList,
      });
    } catch (e) {
      if (e.response) {
        setError(UNEXPECTED_ERROR);
      } else {
        setError(NETWORK_ERROR);
      }
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getServiceListAndCount();
  }, []);

  return {
    isLoading,
    error,
    serviceInfo,
  };
};

export default useService;
