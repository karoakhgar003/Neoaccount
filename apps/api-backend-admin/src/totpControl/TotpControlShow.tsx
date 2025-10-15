import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ENTITLEMENT_TITLE_FIELD } from "../entitlement/EntitlementTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TotpControlShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="blockedUntil" source="blockedUntil" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deviceHash" source="deviceHash" />
        <ReferenceField
          label="entitlement"
          source="entitlement.id"
          reference="Entitlement"
        >
          <TextField source={ENTITLEMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="flags" source="flags" />
        <TextField label="ID" source="id" />
        <TextField label="totpCount7d" source="totpCount7d" />
        <TextField label="totpCountDay" source="totpCountDay" />
        <TextField label="totpLastIssuedAt" source="totpLastIssuedAt" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
