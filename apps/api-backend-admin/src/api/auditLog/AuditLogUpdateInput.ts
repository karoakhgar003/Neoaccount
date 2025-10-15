import { InputJsonValue } from "../../types";

export type AuditLogUpdateInput = {
  action?: string | null;
  actorId?: string | null;
  actorType?: "Option1" | null;
  afterJson?: InputJsonValue;
  beforeJson?: InputJsonValue;
  entity?: string | null;
  entityId?: string | null;
  ip?: string | null;
  ua?: string | null;
};
