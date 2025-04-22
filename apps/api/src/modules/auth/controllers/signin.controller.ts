import { Controller, Post, Request, UseGuards } from "@nestjs/common";

import { AuthLocalGuard } from "../guards/auth-local.guard";

@Controller("/auth/signin")
export class SigninController {
  constructor() {}

  @Post()
  @UseGuards(AuthLocalGuard)
  async signin(@Request() request) {
    return request.user;
  }
}
