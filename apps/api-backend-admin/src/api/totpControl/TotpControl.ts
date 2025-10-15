import { Entitlement } from "../entitlement/Entitlement";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type TotpControl = {
  blockedUntil: Date | null;
  createdAt: Date;
  deviceHash: string | null;
  entitlement?: Entitlement | null;
  flags: JsonValue;
  id: string;
  totpCount7d: number | null;
  totpCountDay: number | null;
  totpLastIssuedAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};
