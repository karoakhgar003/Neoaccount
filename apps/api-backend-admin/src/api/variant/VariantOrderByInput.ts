import { SortOrder } from "../../util/SortOrder";

export type VariantOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  sku?: SortOrder;
  stock?: SortOrder;
  updatedAt?: SortOrder;
};
