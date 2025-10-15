import { Entitlement } from "../entitlement/Entitlement";
import { JsonValue } from "type-fest";
import { OrderItem } from "../orderItem/OrderItem";
import { Variant } from "../variant/Variant";

export type Product = {
  createdAt: Date;
  description: string | null;
  entitlements?: Array<Entitlement>;
  id: string;
  images: string | null;
  isSpecialTotpProduct: boolean | null;
  meta: JsonValue;
  orderItems?: Array<OrderItem>;
  slug: string | null;
  status?: "Option1" | null;
  title: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  variants?: Array<Variant>;
};
