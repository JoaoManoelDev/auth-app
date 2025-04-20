import { ConflictException, Injectable } from "@nestjs/common";

import { CreateUserDTO } from "src/modules/user/dto/create-user.dto";
import { UserService } from "src/modules/user/user.service";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async registerUser(createUserDTO: CreateUserDTO) {
    const user = await this.userService.findByEmail(createUserDTO.email);

    if (user) {
      throw new ConflictException({
        message: "user_already_exists",
      });
    }

    return this.userService.create(createUserDTO);
  }
}
