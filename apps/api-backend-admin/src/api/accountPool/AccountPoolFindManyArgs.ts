import { AccountPoolWhereInput } from "./AccountPoolWhereInput";
import { AccountPoolOrderByInput } from "./AccountPoolOrderByInput";

export type AccountPoolFindManyArgs = {
  where?: AccountPoolWhereInput;
  orderBy?: Array<AccountPoolOrderByInput>;
  skip?: number;
  take?: number;
};
