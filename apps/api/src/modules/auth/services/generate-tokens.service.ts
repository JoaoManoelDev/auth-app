import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { AuthJwtPaylaod } from "../@types/auth-jwt-payload";

interface GenerateTokensServiceProps {
  userId: string;
}

@Injectable()
export class GenerateTokensService {
  constructor(private jwtService: JwtService) {}

  async handle({ userId }: GenerateTokensServiceProps) {
    const payload: AuthJwtPaylaod = { sub: userId };

    const [accessToken] = await Promise.all([
      await this.jwtService.signAsync(payload),
    ]);

    return {
      accessToken,
    };
  }
}
