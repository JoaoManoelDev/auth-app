import { IsEmail, IsString } from "class-validator";

export class CreateUserDTO {
  @IsString()
  name!: string;

  @IsString()
  @IsEmail({}, { message: "email must be valid" })
  email!: string;

  @IsString()
  password!: string;
}
