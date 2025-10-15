import { OrderItem as TOrderItem } from "../api/orderItem/OrderItem";

export const ORDERITEM_TITLE_FIELD = "titleSnapshot";

export const OrderItemTitle = (record: TOrderItem): string => {
  return record.titleSnapshot?.toString() || String(record.id);
};
