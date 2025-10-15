import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Product } from "../product/Product";
import { Variant } from "../variant/Variant";

export type OrderItem = {
  createdAt: Date;
  id: string;
  meta: JsonValue;
  order?: Order | null;
  product?: Product | null;
  qty: number | null;
  titleSnapshot: string | null;
  unitPrice: number | null;
  updatedAt: Date;
  variant?: Variant | null;
};
