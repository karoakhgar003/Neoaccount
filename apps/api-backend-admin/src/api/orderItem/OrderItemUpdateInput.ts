import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { VariantWhereUniqueInput } from "../variant/VariantWhereUniqueInput";

export type OrderItemUpdateInput = {
  meta?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  qty?: number | null;
  titleSnapshot?: string | null;
  unitPrice?: number | null;
  variant?: VariantWhereUniqueInput | null;
};
