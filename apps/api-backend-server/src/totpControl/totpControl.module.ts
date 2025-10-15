import { Module } from "@nestjs/common";
import { TotpControlModuleBase } from "./base/totpControl.module.base";
import { TotpControlService } from "./totpControl.service";
import { TotpControlController } from "./totpControl.controller";
import { TotpControlResolver } from "./totpControl.resolver";

@Module({
  imports: [TotpControlModuleBase],
  controllers: [TotpControlController],
  providers: [TotpControlService, TotpControlResolver],
  exports: [TotpControlService],
})
export class TotpControlModule {}
