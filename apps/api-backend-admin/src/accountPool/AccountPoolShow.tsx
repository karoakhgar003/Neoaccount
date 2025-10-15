import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccountPoolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="assignedAt" source="assignedAt" />
        <TextField label="assignedToUserId" source="assignedToUserId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="notes" source="notes" />
        <TextField label="passwordEnc" source="passwordEnc" />
        <TextField label="status" source="status" />
        <TextField label="totpSecretEnc" source="totpSecretEnc" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
