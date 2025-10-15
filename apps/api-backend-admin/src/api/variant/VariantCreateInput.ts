import { OrderItemCreateNestedManyWithoutVariantsInput } from "./OrderItemCreateNestedManyWithoutVariantsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type VariantCreateInput = {
  active?: boolean | null;
  currency?: string | null;
  name?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutVariantsInput;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  sku?: string | null;
  stock?: number | null;
};
