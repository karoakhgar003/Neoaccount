import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AuditLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AuditLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
