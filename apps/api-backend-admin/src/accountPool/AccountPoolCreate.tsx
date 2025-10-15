import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const AccountPoolCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="assignedAt" source="assignedAt" />
        <TextInput label="assignedToUserId" source="assignedToUserId" />
        <TextInput label="notes" multiline source="notes" />
        <TextInput label="passwordEnc" source="passwordEnc" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="totpSecretEnc" source="totpSecretEnc" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
