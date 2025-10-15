import { JsonValue } from "type-fest";

export type AuditLog = {
  action: string | null;
  actorId: string | null;
  actorType?: "Option1" | null;
  afterJson: JsonValue;
  beforeJson: JsonValue;
  createdAt: Date;
  entity: string | null;
  entityId: string | null;
  id: string;
  ip: string | null;
  ua: string | null;
  updatedAt: Date;
};
