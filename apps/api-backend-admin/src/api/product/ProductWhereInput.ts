import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntitlementListRelationFilter } from "../entitlement/EntitlementListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { VariantListRelationFilter } from "../variant/VariantListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  entitlements?: EntitlementListRelationFilter;
  id?: StringFilter;
  images?: StringNullableFilter;
  isSpecialTotpProduct?: BooleanNullableFilter;
  meta?: JsonFilter;
  orderItems?: OrderItemListRelationFilter;
  slug?: StringNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
  typeField?: "Option1";
  variants?: VariantListRelationFilter;
};
