import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { z } from "zod";

import { Env } from "src/env";

const tokenPayloadSchema = z.object({
  sub: z.string().uuid(),
});

export type UserPayload = z.infer<typeof tokenPayloadSchema>;

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  "refresh-jwt"
) {
  constructor(configService: ConfigService<Env, true>) {
    const refreshTokenSecret = configService.get("REFRESH_JWT_SECRET", {
      infer: true,
    });

    super({
      jwtFromRequest: ExtractJwt.fromBodyField("refresh_token"),
      secretOrKey: refreshTokenSecret,
      ignoreExpiration: false,
    });
  }

  async validate(payload: UserPayload) {
    return tokenPayloadSchema.parse(payload);
  }
}
