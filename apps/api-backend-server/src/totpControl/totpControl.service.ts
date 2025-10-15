import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TotpControlServiceBase } from "./base/totpControl.service.base";

@Injectable()
export class TotpControlService extends TotpControlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
