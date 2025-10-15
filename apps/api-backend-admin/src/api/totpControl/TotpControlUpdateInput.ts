import { EntitlementWhereUniqueInput } from "../entitlement/EntitlementWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TotpControlUpdateInput = {
  blockedUntil?: Date | null;
  deviceHash?: string | null;
  entitlement?: EntitlementWhereUniqueInput | null;
  flags?: InputJsonValue;
  totpCount7d?: number | null;
  totpCountDay?: number | null;
  totpLastIssuedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
