import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BlogPostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <TextField label="coverUrl" source="coverUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="excerpt" source="excerpt" />
        <TextField label="ID" source="id" />
        <TextField label="publishedAt" source="publishedAt" />
        <TextField label="slug" source="slug" />
        <TextField label="tags" source="tags" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
