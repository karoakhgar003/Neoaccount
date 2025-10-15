import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  sort?: SortOrder;
  updatedAt?: SortOrder;
};
