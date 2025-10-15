import { SortOrder } from "../../util/SortOrder";

export type TotpControlOrderByInput = {
  blockedUntil?: SortOrder;
  createdAt?: SortOrder;
  deviceHash?: SortOrder;
  entitlementId?: SortOrder;
  flags?: SortOrder;
  id?: SortOrder;
  totpCount7d?: SortOrder;
  totpCountDay?: SortOrder;
  totpLastIssuedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
