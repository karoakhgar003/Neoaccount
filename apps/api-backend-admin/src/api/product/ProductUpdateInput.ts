import { EntitlementUpdateManyWithoutProductsInput } from "./EntitlementUpdateManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";
import { VariantUpdateManyWithoutProductsInput } from "./VariantUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  entitlements?: EntitlementUpdateManyWithoutProductsInput;
  images?: string | null;
  isSpecialTotpProduct?: boolean | null;
  meta?: InputJsonValue;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
  slug?: string | null;
  status?: "Option1" | null;
  title?: string | null;
  typeField?: "Option1" | null;
  variants?: VariantUpdateManyWithoutProductsInput;
};
