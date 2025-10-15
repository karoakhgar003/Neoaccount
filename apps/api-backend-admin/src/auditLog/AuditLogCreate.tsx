import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const AuditLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="actorId" source="actorId" />
        <SelectInput
          source="actorType"
          label="actorType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <div />
        <TextInput label="entity" source="entity" />
        <TextInput label="entityId" source="entityId" />
        <TextInput label="ip" source="ip" />
        <TextInput label="ua" source="ua" />
      </SimpleForm>
    </Create>
  );
};
