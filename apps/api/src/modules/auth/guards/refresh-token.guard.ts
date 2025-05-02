import { UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

interface ErrorMessage {
  response: {
    message: string;
    error: string;
    statusCode: string;
  };
}

export class RefreshTokenGuard extends AuthGuard("refresh-jwt") {
  handleRequest<TUser>(err: ErrorMessage | null, user: TUser): TUser {
    console.log("USER", user);

    if (err || !user) {
      console.log("ERROR", err);

      throw new UnauthorizedException({
        message: err?.response?.message ?? "unauthorized",
        statusCode: 401,
      });
    }

    return user;
  }
}
