import { Injectable } from "@nestjs/common";
import { GenerateTokensService } from "./generate-tokens.service";

interface LoginServiceProps {
  userId: string;
  name: string;
}

@Injectable()
export class LoginService {
  constructor(private generateTokensService: GenerateTokensService) {}

  async handle({ name, userId }: LoginServiceProps) {
    const { accessToken } = await this.generateTokensService.handle({ userId });

    return {
      id: userId,
      name,
      accessToken,
    };
  }
}
