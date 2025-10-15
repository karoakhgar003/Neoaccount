import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TotpControlListRelationFilter } from "../totpControl/TotpControlListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntitlementWhereInput = {
  accountId?: StringNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  purchaseDate?: DateTimeNullableFilter;
  status?: "Option1";
  totpControls?: TotpControlListRelationFilter;
  user?: UserWhereUniqueInput;
};
