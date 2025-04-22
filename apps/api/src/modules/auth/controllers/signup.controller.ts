import { Body, Controller, Post } from "@nestjs/common";

import { ValidationPipe } from "src/pipes/class-validator-pipe";
import { CreateUserDTO } from "src/modules/user/dto/create-user.dto";
import { AuthService } from "../auth.service";

@Controller("/auth/signup")
export class SignupController {
  constructor(private authService: AuthService) {}

  @Post()
  async signup(@Body(new ValidationPipe()) createUserDTO: CreateUserDTO) {
    await this.authService.registerUser(createUserDTO);
  }
}
