import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { compare } from "bcryptjs";

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

  async validateLocalUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException("invalid_credentials");
    }

    const isPassowordMatched = await compare(password, user.password);

    if (!isPassowordMatched) {
      throw new UnauthorizedException("invalid_credentials");
    }

    return {
      id: user.id,
      name: user.name,
    };
  }
}
