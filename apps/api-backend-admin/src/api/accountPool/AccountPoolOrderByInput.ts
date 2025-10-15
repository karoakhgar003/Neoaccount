import { SortOrder } from "../../util/SortOrder";

export type AccountPoolOrderByInput = {
  assignedAt?: SortOrder;
  assignedToUserId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  passwordEnc?: SortOrder;
  status?: SortOrder;
  totpSecretEnc?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
