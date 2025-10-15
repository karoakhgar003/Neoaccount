import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { VARIANT_TITLE_FIELD } from "../variant/VariantTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <BooleanField
          label="isSpecialTotpProduct"
          source="isSpecialTotpProduct"
        />
        <TextField label="meta" source="meta" />
        <TextField label="slug" source="slug" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Entitlement"
          target="productId"
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
        <ReferenceManyField
          reference="OrderItem"
          target="productId"
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
        <ReferenceManyField
          reference="Variant"
          target="productId"
          label="Variants"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="active" source="active" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="currency" source="currency" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="price" source="price" />
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="sku" source="sku" />
            <TextField label="stock" source="stock" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
