import { Injectable, UnauthorizedException } from "@nestjs/common";
import { compare } from "bcryptjs";

import { UserService } from "src/modules/user/user.service";

interface ValidateLocalUserProps {
  email: string;
  password: string;
}

@Injectable()
export class ValidateLocalUserService {
  constructor(private userService: UserService) {}

  async handle({ email, password }: ValidateLocalUserProps) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException({
        message: "invalid_credentials",
      });
    }

    const isPassowordMatched = await compare(password, user.password);

    if (!isPassowordMatched) {
      throw new UnauthorizedException({
        message: "invalid_credentials",
      });
    }

    return {
      id: user.id,
      name: user.name,
    };
  }
}
