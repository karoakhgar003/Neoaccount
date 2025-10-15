import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  currency?: string | null;
  deliveredAt?: Date | null;
  invoiceId?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  paymentIntentId?: string | null;
  paymentProvider?: string | null;
  status?: "Option1" | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
