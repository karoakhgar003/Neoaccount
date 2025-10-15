import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  currency?: string | null;
  deliveredAt?: Date | null;
  invoiceId?: string | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  paymentIntentId?: string | null;
  paymentProvider?: string | null;
  status?: "Option1" | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
