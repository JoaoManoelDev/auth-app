import { Module } from "@nestjs/common";

import { SigninController } from "./controllers/signin.controller";
import { SignupController } from "./controllers/signup.controller";

import { AuthService } from "./auth.service";
import { UserService } from "src/modules/user/user.service";
import { PrismaService } from "src/prisma/prisma.service";
import { LocalStrategy } from "./strategies/local.strategy";

@Module({
  controllers: [SigninController, SignupController],
  providers: [AuthService, UserService, PrismaService, LocalStrategy],
})
export class AuthModule {}
