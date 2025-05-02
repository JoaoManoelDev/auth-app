import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
// import { ConfigService } from "@nestjs/config";

import { SigninController } from "./controllers/signin.controller";
import { SignupController } from "./controllers/signup.controller";
import { RefreshTokenController } from "./controllers/refresh-token.controller";

import { UserService } from "src/modules/user/user.service";
import { PrismaService } from "src/prisma/prisma.service";
import { LoginService } from "./services/login.service";
import { RegisterUserService } from "./services/register-user.service";
import { GenerateTokensService } from "./services/generate-tokens.service";
import { ValidateLocalUserService } from "./services/validate-local-user.service";
import { LocalStrategy } from "./strategies/local.strategy";
import { JWTStrategy } from "./strategies/jwt.strategy";
import { RefreshTokenStrategy } from "./strategies/refresh-token.strategy";
import { RefreshTokenService } from "./services/refresh-token.service";
// import { Env } from "src/env";

@Module({
  imports: [JwtModule],
  controllers: [SigninController, SignupController, RefreshTokenController],
  providers: [
    PrismaService,
    LocalStrategy,
    JWTStrategy,
    RefreshTokenStrategy,
    UserService,
    LoginService,
    RegisterUserService,
    ValidateLocalUserService,
    RefreshTokenService,
    GenerateTokensService,
  ],
})
export class AuthModule {}

// JwtModule.registerAsync({
//   inject: [ConfigService],
//   global: true,
//   useFactory: async (config: ConfigService<Env, true>) => {
//     const jwtSecret = config.get("JWT_SECRET", { infer: true });
//     const jwtExpiresIn = config.get("JWT_EXPIRES_IN", { infer: true });

//     return {
//       signOptions: { expiresIn: jwtExpiresIn },
//       secret: jwtSecret,
//     };
//   },
// }),
