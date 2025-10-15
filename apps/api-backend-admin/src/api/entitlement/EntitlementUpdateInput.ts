import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TotpControlUpdateManyWithoutEntitlementsInput } from "./TotpControlUpdateManyWithoutEntitlementsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EntitlementUpdateInput = {
  accountId?: string | null;
  expiryDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  purchaseDate?: Date | null;
  status?: "Option1" | null;
  totpControls?: TotpControlUpdateManyWithoutEntitlementsInput;
  user?: UserWhereUniqueInput | null;
};
