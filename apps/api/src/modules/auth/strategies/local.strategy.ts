import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

import { AuthService } from "../auth.service";

interface UserValidate {
  email: string;
  password: string;
}

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: "email",
    });
  }

  validate({ email, password }: UserValidate) {
    return this.authService.validateLocalUser({
      email,
      password,
    });
  }
}
