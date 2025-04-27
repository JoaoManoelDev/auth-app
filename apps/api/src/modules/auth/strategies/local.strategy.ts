import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

import { ValidateLocalUserService } from "../services/validate-local-user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private validateLocalUserService: ValidateLocalUserService) {
    super({
      usernameField: "email",
    });
  }

  async validate(email: string, password: string) {
    return await this.validateLocalUserService.handle({
      email,
      password,
    });
  }
}
