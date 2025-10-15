import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntitlementWhereUniqueInput } from "../entitlement/EntitlementWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TotpControlWhereInput = {
  blockedUntil?: DateTimeNullableFilter;
  deviceHash?: StringNullableFilter;
  entitlement?: EntitlementWhereUniqueInput;
  flags?: JsonFilter;
  id?: StringFilter;
  totpCount7d?: IntNullableFilter;
  totpCountDay?: IntNullableFilter;
  totpLastIssuedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
