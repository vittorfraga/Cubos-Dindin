export interface LoginDTO {
  email: string;
  password: string;
}

export interface ILoggedUser {
  id: string;
  name: string;
  email: string;
}

export interface IResponse {
  id: string;
  name: string;
  email: string;
  token: string;
}
