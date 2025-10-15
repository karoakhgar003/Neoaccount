import { OrderItem } from "../orderItem/OrderItem";
import { Product } from "../product/Product";

export type Variant = {
  active: boolean | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  product?: Product | null;
  sku: string | null;
  stock: number | null;
  updatedAt: Date;
};
