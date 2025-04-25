import { UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

interface ErrorMessage {
  response: {
    message: string;
    error: string;
    statusCode: string;
  };
}

export class AuthLocalGuard extends AuthGuard("local") {
  handleRequest<TUser>(err: ErrorMessage | null, user: TUser): TUser {
    if (err || !user) {
      console.log("ERROR", err);
      throw new UnauthorizedException({
        message: err ? err?.response?.message : "unauthorized",
        statusCode: 401,
      });
    }

    return user;
  }
}
