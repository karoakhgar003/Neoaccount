import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TotpControlCreateNestedManyWithoutEntitlementsInput } from "./TotpControlCreateNestedManyWithoutEntitlementsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntitlementCreateInput = {
  accountId?: string | null;
  expiryDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  purchaseDate?: Date | null;
  status?: "Option1" | null;
  totpControls?: TotpControlCreateNestedManyWithoutEntitlementsInput;
  user?: UserWhereUniqueInput | null;
};
