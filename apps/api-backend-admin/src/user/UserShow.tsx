import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { ENTITLEMENT_TITLE_FIELD } from "../entitlement/EntitlementTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastLoginAt" source="lastLoginAt" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="passwordHash" source="passwordHash" />
        <TextField label="role" source="role" />
        <TextField label="Roles" source="roles" />
        <TextField label="telegramChatId" source="telegramChatId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Entitlement"
          target="userId"
          label="Entitlements"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="accountId" source="accountId" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="expiryDate" source="expiryDate" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="purchaseDate" source="purchaseDate" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Order" target="userId" label="Orders">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="currency" source="currency" />
            <TextField label="deliveredAt" source="deliveredAt" />
            <TextField label="ID" source="id" />
            <TextField label="invoiceId" source="invoiceId" />
            <TextField label="paymentIntentId" source="paymentIntentId" />
            <TextField label="paymentProvider" source="paymentProvider" />
            <TextField label="status" source="status" />
            <TextField label="total" source="total" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TotpControl"
          target="userId"
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
