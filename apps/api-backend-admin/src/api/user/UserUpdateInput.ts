import { EntitlementUpdateManyWithoutUsersInput } from "./EntitlementUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TotpControlUpdateManyWithoutUsersInput } from "./TotpControlUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  entitlements?: EntitlementUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastLoginAt?: Date | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  passwordHash?: string | null;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  telegramChatId?: string | null;
  totpControls?: TotpControlUpdateManyWithoutUsersInput;
  username?: string;
};
