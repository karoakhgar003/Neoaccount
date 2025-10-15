import * as graphql from "@nestjs/graphql";
import { EntitlementResolverBase } from "./base/entitlement.resolver.base";
import { Entitlement } from "./base/Entitlement";
import { EntitlementService } from "./entitlement.service";

@graphql.Resolver(() => Entitlement)
export class EntitlementResolver extends EntitlementResolverBase {
  constructor(protected readonly service: EntitlementService) {
    super(service);
  }
}
