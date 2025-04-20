import { Body, Controller, Post } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { ValidationPipe } from "src/pipes/class-validator-pipe";
import { CreateUserDTO } from "src/modules/user/dto/create-user.dto";

@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  async signup(@Body(new ValidationPipe()) createUserDTO: CreateUserDTO) {
    await this.authService.registerUser(createUserDTO);
  }
}
