import { Injectable } from "@nestjs/common";
import { hash } from "bcryptjs";

import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDTO: CreateUserDTO) {
    const { email, name, password } = createUserDTO;

    const hashedPassword = await hash(password, 8);

    await this.prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findById(userId: string) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
