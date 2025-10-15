import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntitlementListRelationFilter } from "../entitlement/EntitlementListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { TotpControlListRelationFilter } from "../totpControl/TotpControlListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  entitlements?: EntitlementListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastLoginAt?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  passwordHash?: StringNullableFilter;
  role?: "Option1";
  telegramChatId?: StringNullableFilter;
  totpControls?: TotpControlListRelationFilter;
  username?: StringFilter;
};
