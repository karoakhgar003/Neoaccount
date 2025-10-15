import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountPoolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AccountPools"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="assignedAt" source="assignedAt" />
        <TextField label="assignedToUserId" source="assignedToUserId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="notes" source="notes" />
        <TextField label="passwordEnc" source="passwordEnc" />
        <TextField label="status" source="status" />
        <TextField label="totpSecretEnc" source="totpSecretEnc" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
