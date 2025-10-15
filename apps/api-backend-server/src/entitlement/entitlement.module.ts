import { Module } from "@nestjs/common";
import { EntitlementModuleBase } from "./base/entitlement.module.base";
import { EntitlementService } from "./entitlement.service";
import { EntitlementController } from "./entitlement.controller";
import { EntitlementResolver } from "./entitlement.resolver";

@Module({
  imports: [EntitlementModuleBase],
  controllers: [EntitlementController],
  providers: [EntitlementService, EntitlementResolver],
  exports: [EntitlementService],
})
export class EntitlementModule {}
