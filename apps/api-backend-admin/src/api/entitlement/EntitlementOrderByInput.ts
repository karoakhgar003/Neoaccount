import { SortOrder } from "../../util/SortOrder";

export type EntitlementOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  purchaseDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
