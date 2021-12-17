export type ServiceBasicInfo = {
  id: number;
  name: string;
  clientId: string;
  domain: string | null;
};

export type ServiceListAndCountResponseBody = {
  projectList: ServiceBasicInfo[];
  count: number;
};
