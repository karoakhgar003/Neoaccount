import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VariantWhereUniqueInput } from "../variant/VariantWhereUniqueInput";

export type OrderItemWhereInput = {
  id?: StringFilter;
  meta?: JsonFilter;
  order?: OrderWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  qty?: IntNullableFilter;
  titleSnapshot?: StringNullableFilter;
  unitPrice?: IntNullableFilter;
  variant?: VariantWhereUniqueInput;
};
