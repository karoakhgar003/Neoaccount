import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const AccountPoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
