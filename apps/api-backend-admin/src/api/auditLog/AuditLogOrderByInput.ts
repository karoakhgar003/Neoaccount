import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  action?: SortOrder;
  actorId?: SortOrder;
  actorType?: SortOrder;
  afterJson?: SortOrder;
  beforeJson?: SortOrder;
  createdAt?: SortOrder;
  entity?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  ip?: SortOrder;
  ua?: SortOrder;
  updatedAt?: SortOrder;
};
