import { Injectable, UnauthorizedException } from "@nestjs/common";

import { UserService } from "src/modules/user/user.service";
import { UserPayload } from "../strategies/jwt.strategy";
import { GenerateTokensService } from "./generate-tokens.service";

@Injectable()
export class RefreshTokenService {
  constructor(
    private userService: UserService,
    private generateTokensService: GenerateTokensService
  ) {}

  async handle(payload: UserPayload) {
    const user = await this.userService.findById(payload.sub);

    if (!user) throw new UnauthorizedException("user_not_found");

    return await this.generateTokensService.handle({ userId: user.id });
  }
}
