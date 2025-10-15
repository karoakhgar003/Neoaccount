import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogPostWhereInput = {
  content?: StringNullableFilter;
  coverUrl?: StringNullableFilter;
  excerpt?: StringNullableFilter;
  id?: StringFilter;
  publishedAt?: DateTimeNullableFilter;
  slug?: StringNullableFilter;
  tags?: StringNullableFilter;
  title?: StringNullableFilter;
};
