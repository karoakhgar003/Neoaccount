import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountPoolWhereInput = {
  assignedAt?: DateTimeNullableFilter;
  assignedToUserId?: StringNullableFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  passwordEnc?: StringNullableFilter;
  status?: "Option1";
  totpSecretEnc?: StringNullableFilter;
  username?: StringNullableFilter;
};
