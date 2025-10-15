import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  currency?: StringNullableFilter;
  deliveredAt?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceId?: StringNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  paymentIntentId?: StringNullableFilter;
  paymentProvider?: StringNullableFilter;
  status?: "Option1";
  total?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
