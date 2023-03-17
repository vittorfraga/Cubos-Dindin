import { CreateUserDTO } from "../CreateUser/CreateUserDTO";

export interface UpdateUserDTO extends CreateUserDTO {
  id: string;
}
