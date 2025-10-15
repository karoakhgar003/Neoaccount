import { EntitlementCreateNestedManyWithoutUsersInput } from "./EntitlementCreateNestedManyWithoutUsersInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TotpControlCreateNestedManyWithoutUsersInput } from "./TotpControlCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  entitlements?: EntitlementCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastLoginAt?: Date | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  passwordHash?: string | null;
  role?: "Option1" | null;
  roles: InputJsonValue;
  telegramChatId?: string | null;
  totpControls?: TotpControlCreateNestedManyWithoutUsersInput;
  username: string;
};
