import { IsEmail, IsString } from "class-validator";

export class CreateUserDTO {
  @IsString()
  name!: string;

  @IsString()
  @IsEmail({}, { message: "email_must_be_valid" })
  email!: string;

  @IsString()
  password!: string;
}
