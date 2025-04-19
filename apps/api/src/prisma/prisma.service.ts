import { OnModuleDestroy, OnModuleInit } from "@nestjs/common";

import { PrismaClient } from "generated/prisma";

export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ["error", "warn"],
    });
  }

  async onModuleInit() {
    return await this.$connect();
  }

  async onModuleDestroy() {
    return await this.$disconnect();
  }
}
