import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="coverUrl" source="coverUrl" />
        <TextInput label="excerpt" multiline source="excerpt" />
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <TextInput label="slug" source="slug" />
        <TextInput label="tags" multiline source="tags" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
