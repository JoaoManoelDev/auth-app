import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserPayload } from "../strategies/jwt.strategy";

interface GenerateTokensServiceProps {
  userId: string;
}

@Injectable()
export class GenerateTokensService {
  constructor(private jwtService: JwtService) {}

  async handle({ userId }: GenerateTokensServiceProps) {
    const payload: UserPayload = { sub: userId };

    const [accessToken] = await Promise.all([
      await this.jwtService.signAsync(payload),
    ]);

    return {
      accessToken,
    };
  }
}
