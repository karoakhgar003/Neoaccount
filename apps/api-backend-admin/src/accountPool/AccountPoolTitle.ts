import { AccountPool as TAccountPool } from "../api/accountPool/AccountPool";

export const ACCOUNTPOOL_TITLE_FIELD = "username";

export const AccountPoolTitle = (record: TAccountPool): string => {
  return record.username?.toString() || String(record.id);
};
