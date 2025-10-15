import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const AuditLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
