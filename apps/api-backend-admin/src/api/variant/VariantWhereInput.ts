import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type VariantWhereInput = {
  active?: BooleanNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  price?: IntNullableFilter;
  product?: ProductWhereUniqueInput;
  sku?: StringNullableFilter;
  stock?: IntNullableFilter;
};
