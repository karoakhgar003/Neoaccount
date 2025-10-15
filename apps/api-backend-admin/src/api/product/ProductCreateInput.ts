import { EntitlementCreateNestedManyWithoutProductsInput } from "./EntitlementCreateNestedManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";
import { VariantCreateNestedManyWithoutProductsInput } from "./VariantCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  entitlements?: EntitlementCreateNestedManyWithoutProductsInput;
  images?: string | null;
  isSpecialTotpProduct?: boolean | null;
  meta?: InputJsonValue;
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
  slug?: string | null;
  status?: "Option1" | null;
  title?: string | null;
  typeField?: "Option1" | null;
  variants?: VariantCreateNestedManyWithoutProductsInput;
};
