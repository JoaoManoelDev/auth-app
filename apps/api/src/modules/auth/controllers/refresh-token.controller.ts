import { Controller, Post, UseGuards } from "@nestjs/common";

import { RefreshTokenGuard } from "../guards/refresh-token.guard";
import { CurrentUser } from "../decorators/current-user-decorator";
import { RefreshTokenService } from "../services/refresh-token.service";

@Controller("/refresh-token")
export class RefreshTokenController {
  constructor(private refreshTokenService: RefreshTokenService) {}

  @UseGuards(RefreshTokenGuard)
  @Post()
  async handle(@CurrentUser() user: { sub: string }) {
    return await this.refreshTokenService.handle({ sub: user.sub });
  }
}
