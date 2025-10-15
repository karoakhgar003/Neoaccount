import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  meta?: SortOrder;
  orderId?: SortOrder;
  productId?: SortOrder;
  qty?: SortOrder;
  titleSnapshot?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
  variantId?: SortOrder;
};
