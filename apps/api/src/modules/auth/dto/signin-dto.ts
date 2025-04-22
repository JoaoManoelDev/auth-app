import { IsEmail, IsString } from "class-validator";

export class SigninDTO {
  @IsString()
  @IsEmail({}, { message: "email_must_be_valid" })
  email!: string;

  @IsString()
  password!: string;
}
