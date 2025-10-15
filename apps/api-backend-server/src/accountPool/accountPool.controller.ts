import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountPoolService } from "./accountPool.service";
import { AccountPoolControllerBase } from "./base/accountPool.controller.base";

@swagger.ApiTags("accountPools")
@common.Controller("accountPools")
export class AccountPoolController extends AccountPoolControllerBase {
  constructor(protected readonly service: AccountPoolService) {
    super(service);
  }
}
