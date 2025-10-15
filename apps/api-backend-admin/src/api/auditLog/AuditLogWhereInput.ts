import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuditLogWhereInput = {
  action?: StringNullableFilter;
  actorId?: StringNullableFilter;
  actorType?: "Option1";
  afterJson?: JsonFilter;
  beforeJson?: JsonFilter;
  entity?: StringNullableFilter;
  entityId?: StringNullableFilter;
  id?: StringFilter;
  ip?: StringNullableFilter;
  ua?: StringNullableFilter;
};
