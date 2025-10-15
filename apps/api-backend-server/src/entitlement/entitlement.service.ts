import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntitlementServiceBase } from "./base/entitlement.service.base";

@Injectable()
export class EntitlementService extends EntitlementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
