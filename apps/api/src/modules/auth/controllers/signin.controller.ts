import { Body, Controller, Post } from "@nestjs/common";

import { ValidationPipe } from "src/pipes/class-validator-pipe";
import { SigninDTO } from "../dto/signin-dto";

@Controller("/signin")
export class SigninController {
  constructor() {}

  @Post()
  async signin(@Body(new ValidationPipe()) signinDTO: SigninDTO) {}
}
