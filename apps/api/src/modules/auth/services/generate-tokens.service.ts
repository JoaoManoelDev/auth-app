import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

import { UserPayload } from "../strategies/jwt.strategy";
import { Env } from "src/env";

interface GenerateTokensServiceProps {
  userId: string;
}

@Injectable()
export class GenerateTokensService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService<Env, true>
  ) {}

  async handle({ userId }: GenerateTokensServiceProps) {
    const payload: UserPayload = { sub: userId };

    const jwtSecret = this.configService.get("JWT_SECRET", { infer: true });
    const jwtExpiresIn = this.configService.get("JWT_EXPIRES_IN", {
      infer: true,
    });

    const refreshTokenSecret = this.configService.get("REFRESH_JWT_SECRET", {
      infer: true,
    });

    const refreshTokenExpiresIn = this.configService.get(
      "REFRESH_JWT_EXPIRES_IN",
      { infer: true }
    );

    const [accessToken, refreshToken] = await Promise.all([
      await this.jwtService.signAsync(payload, {
        secret: jwtSecret,
        expiresIn: jwtExpiresIn,
      }),
      await this.jwtService.signAsync(payload, {
        secret: refreshTokenSecret,
        expiresIn: refreshTokenExpiresIn,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
