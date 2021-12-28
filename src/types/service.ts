export interface ServiceInfo {
  id: number;
  name: string;
  clientId: string;
  description: string;
  domain: string;
  profileImg: string;
  firstQuestion: string;
  theme: number;
}

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
