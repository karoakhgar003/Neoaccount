import { OrderItem } from "../orderItem/OrderItem";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  currency: string | null;
  deliveredAt: Date | null;
  id: string;
  invoiceId: string | null;
  orderItems?: Array<OrderItem>;
  paymentIntentId: string | null;
  paymentProvider: string | null;
  status?: "Option1" | null;
  total: number | null;
  updatedAt: Date;
  user?: User | null;
};
