import { OrderItemUpdateManyWithoutVariantsInput } from "./OrderItemUpdateManyWithoutVariantsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type VariantUpdateInput = {
  active?: boolean | null;
  currency?: string | null;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutVariantsInput;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  sku?: string | null;
  stock?: number | null;
};
