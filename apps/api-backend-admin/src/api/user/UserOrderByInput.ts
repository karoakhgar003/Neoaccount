import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastLoginAt?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  passwordHash?: SortOrder;
  role?: SortOrder;
  roles?: SortOrder;
  telegramChatId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
