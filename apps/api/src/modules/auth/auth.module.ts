import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

import { SigninController } from "./controllers/signin.controller";
import { SignupController } from "./controllers/signup.controller";

import { AuthService } from "./auth.service";
import { UserService } from "src/modules/user/user.service";
import { PrismaService } from "src/prisma/prisma.service";
import { LoginService } from "./services/login.service";
import { GenerateTokensService } from "./services/generate-tokens.service";
import { LocalStrategy } from "./strategies/local.strategy";
import { Env } from "src/env";

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      useFactory: async (config: ConfigService<Env, true>) => {
        const jwtSecret = config.get("JWT_SECRET", { infer: true });
        const jwtExpiresIn = config.get("JWT_EXPIRES_IN", { infer: true });

        return {
          signOptions: { expiresIn: jwtExpiresIn },
          secret: jwtSecret,
        };
      },
    }),
  ],
  controllers: [SigninController, SignupController],
  providers: [
    PrismaService,
    LocalStrategy,
    AuthService,
    UserService,
    LoginService,
    GenerateTokensService,
  ],
})
export class AuthModule {}
