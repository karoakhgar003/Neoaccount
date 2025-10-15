import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { EntitlementTitle } from "../entitlement/EntitlementTitle";
import { UserTitle } from "../user/UserTitle";

export const TotpControlCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="blockedUntil" source="blockedUntil" />
        <TextInput label="deviceHash" source="deviceHash" />
        <ReferenceInput
          source="entitlement.id"
          reference="Entitlement"
          label="entitlement"
        >
          <SelectInput optionText={EntitlementTitle} />
        </ReferenceInput>
        <div />
        <NumberInput step={1} label="totpCount7d" source="totpCount7d" />
        <NumberInput step={1} label="totpCountDay" source="totpCountDay" />
        <DateTimeInput label="totpLastIssuedAt" source="totpLastIssuedAt" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
