import { Controller, Post, Request, UseGuards } from "@nestjs/common";

import { AuthLocalGuard } from "../guards/auth-local.guard";
import { LoginService } from "../services/login.service";

@Controller("/auth/signin")
export class SigninController {
  constructor(private loginService: LoginService) {}

  @Post()
  @UseGuards(AuthLocalGuard)
  async signin(@Request() request) {
    return await this.loginService.handle({
      userId: request.user.id,
      name: request.user.name,
    });
  }
}
