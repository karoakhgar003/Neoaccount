import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ENTITLEMENT_TITLE_FIELD } from "./EntitlementTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const EntitlementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accountId" source="accountId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="purchaseDate" source="purchaseDate" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="TotpControl"
          target="entitlementId"
          label="TotpControls"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
