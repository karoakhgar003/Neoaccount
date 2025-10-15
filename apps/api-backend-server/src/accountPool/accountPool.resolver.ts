import * as graphql from "@nestjs/graphql";
import { AccountPoolResolverBase } from "./base/accountPool.resolver.base";
import { AccountPool } from "./base/AccountPool";
import { AccountPoolService } from "./accountPool.service";

@graphql.Resolver(() => AccountPool)
export class AccountPoolResolver extends AccountPoolResolverBase {
  constructor(protected readonly service: AccountPoolService) {
    super(service);
  }
}
