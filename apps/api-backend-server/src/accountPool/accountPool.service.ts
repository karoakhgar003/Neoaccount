import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountPoolServiceBase } from "./base/accountPool.service.base";

@Injectable()
export class AccountPoolService extends AccountPoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
