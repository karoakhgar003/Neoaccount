import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TotpControlService } from "./totpControl.service";
import { TotpControlControllerBase } from "./base/totpControl.controller.base";

@swagger.ApiTags("totpControls")
@common.Controller("totpControls")
export class TotpControlController extends TotpControlControllerBase {
  constructor(protected readonly service: TotpControlService) {
    super(service);
  }
}
