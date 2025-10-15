import * as graphql from "@nestjs/graphql";
import { TotpControlResolverBase } from "./base/totpControl.resolver.base";
import { TotpControl } from "./base/TotpControl";
import { TotpControlService } from "./totpControl.service";

@graphql.Resolver(() => TotpControl)
export class TotpControlResolver extends TotpControlResolverBase {
  constructor(protected readonly service: TotpControlService) {
    super(service);
  }
}
