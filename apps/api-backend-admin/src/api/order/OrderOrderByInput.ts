import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  deliveredAt?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  paymentIntentId?: SortOrder;
  paymentProvider?: SortOrder;
  status?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
