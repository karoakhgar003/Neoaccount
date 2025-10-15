import { Module } from "@nestjs/common";
import { AccountPoolModuleBase } from "./base/accountPool.module.base";
import { AccountPoolService } from "./accountPool.service";
import { AccountPoolController } from "./accountPool.controller";
import { AccountPoolResolver } from "./accountPool.resolver";

@Module({
  imports: [AccountPoolModuleBase],
  controllers: [AccountPoolController],
  providers: [AccountPoolService, AccountPoolResolver],
  exports: [AccountPoolService],
})
export class AccountPoolModule {}
