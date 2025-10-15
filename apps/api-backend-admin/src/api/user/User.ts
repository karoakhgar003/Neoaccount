import { Entitlement } from "../entitlement/Entitlement";
import { Order } from "../order/Order";
import { JsonValue } from "type-fest";
import { TotpControl } from "../totpControl/TotpControl";

export type User = {
  createdAt: Date;
  email: string | null;
  entitlements?: Array<Entitlement>;
  firstName: string | null;
  id: string;
  lastLoginAt: Date | null;
  lastName: string | null;
  orders?: Array<Order>;
  passwordHash: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  telegramChatId: string | null;
  totpControls?: Array<TotpControl>;
  updatedAt: Date;
  username: string;
};
