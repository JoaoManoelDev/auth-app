import { Module } from "@nestjs/common";

import { SigninController } from "./controllers/signin.controller";
import { SignupController } from "./controllers/signup.controller";

import { AuthService } from "./auth.service";
import { UserService } from "src/modules/user/user.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [SigninController, SignupController],
  providers: [AuthService, UserService, PrismaService],
})
export class AuthModule {}
