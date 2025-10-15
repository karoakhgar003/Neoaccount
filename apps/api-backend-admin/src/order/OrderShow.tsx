import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { VARIANT_TITLE_FIELD } from "../variant/VariantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="OrderItem"
          target="orderId"
          label="OrderItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="meta" source="meta" />
            <ReferenceField label="order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="qty" source="qty" />
            <TextField label="titleSnapshot" source="titleSnapshot" />
            <TextField label="unitPrice" source="unitPrice" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="variant"
              source="variant.id"
              reference="Variant"
            >
              <TextField source={VARIANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
