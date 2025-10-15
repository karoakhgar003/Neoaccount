import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="coverUrl" source="coverUrl" />
        <TextInput label="excerpt" multiline source="excerpt" />
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <TextInput label="slug" source="slug" />
        <TextInput label="tags" multiline source="tags" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
