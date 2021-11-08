export interface LoginRequestBody {
  userId: string;
  password: string;
}

export interface AuthResponseBody {
  access: string;
}
