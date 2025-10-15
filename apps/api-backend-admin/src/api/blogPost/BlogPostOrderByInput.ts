import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  content?: SortOrder;
  coverUrl?: SortOrder;
  createdAt?: SortOrder;
  excerpt?: SortOrder;
  id?: SortOrder;
  publishedAt?: SortOrder;
  slug?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
