import { Product } from "../product/Product";
import { TotpControl } from "../totpControl/TotpControl";
import { User } from "../user/User";

export type Entitlement = {
  accountId: string | null;
  createdAt: Date;
  expiryDate: Date | null;
  id: string;
  product?: Product | null;
  purchaseDate: Date | null;
  status?: "Option1" | null;
  totpControls?: Array<TotpControl>;
  updatedAt: Date;
  user?: User | null;
};
