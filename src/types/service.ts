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

export type ServiceInfoResponseBody = {
  id: number;
  name: string;
  clientId: string;
  description: string | null;
  domain: string | null;
  image: string | null;
  question: string | null;
  createdAt: string;
  updatedAt: string;
  theme: {
    id: number;
    name: string;
  };
  user: {
    uid: string;
  };
};
