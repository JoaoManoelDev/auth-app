import { Body, Controller, Post } from "@nestjs/common";

import { ValidationPipe } from "src/pipes/class-validator-pipe";
import { CreateUserDTO } from "src/modules/user/dto/create-user.dto";
import { RegisterUserService } from "../services/register-user.service";

@Controller("/auth/signup")
export class SignupController {
  constructor(private registerUserService: RegisterUserService) {}

  @Post()
  async signup(@Body(new ValidationPipe()) createUserDTO: CreateUserDTO) {
    await this.registerUserService.handle(createUserDTO);
  }
}
