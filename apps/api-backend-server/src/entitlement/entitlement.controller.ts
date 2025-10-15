import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EntitlementService } from "./entitlement.service";
import { EntitlementControllerBase } from "./base/entitlement.controller.base";

@swagger.ApiTags("entitlements")
@common.Controller("entitlements")
export class EntitlementController extends EntitlementControllerBase {
  constructor(protected readonly service: EntitlementService) {
    super(service);
  }
}
