import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AuditLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="action" source="action" />
        <TextField label="actorId" source="actorId" />
        <TextField label="actorType" source="actorType" />
        <TextField label="afterJson" source="afterJson" />
        <TextField label="beforeJson" source="beforeJson" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="entity" source="entity" />
        <TextField label="entityId" source="entityId" />
        <TextField label="ID" source="id" />
        <TextField label="ip" source="ip" />
        <TextField label="ua" source="ua" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
