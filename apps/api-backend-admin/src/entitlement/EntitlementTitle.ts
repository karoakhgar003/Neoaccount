import { Entitlement as TEntitlement } from "../api/entitlement/Entitlement";

export const ENTITLEMENT_TITLE_FIELD = "accountId";

export const EntitlementTitle = (record: TEntitlement): string => {
  return record.accountId?.toString() || String(record.id);
};
