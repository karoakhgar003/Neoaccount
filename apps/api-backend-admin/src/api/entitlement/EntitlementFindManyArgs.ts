import { EntitlementWhereInput } from "./EntitlementWhereInput";
import { EntitlementOrderByInput } from "./EntitlementOrderByInput";

export type EntitlementFindManyArgs = {
  where?: EntitlementWhereInput;
  orderBy?: Array<EntitlementOrderByInput>;
  skip?: number;
  take?: number;
};
