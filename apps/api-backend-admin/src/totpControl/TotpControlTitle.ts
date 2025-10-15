import { TotpControl as TTotpControl } from "../api/totpControl/TotpControl";

export const TOTPCONTROL_TITLE_FIELD = "deviceHash";

export const TotpControlTitle = (record: TTotpControl): string => {
  return record.deviceHash?.toString() || String(record.id);
};
