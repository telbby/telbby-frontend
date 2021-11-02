export type LoginRequestBody = {
  id: string;
  password: string;
};

export type AuthResponseBody = {
  access: string;
};

export type UpdateInfoResponseBody = {
  idx: number;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
};
