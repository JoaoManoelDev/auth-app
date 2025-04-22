import { UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class AuthLocalGuard extends AuthGuard("local") {
  handleRequest<TUser>(err: unknown, user: TUser): TUser {
    if (err || !user) {
      throw new UnauthorizedException({
        message: "unauthorized",
        statusCode: 401,
      });
    }

    return user;
  }
}
