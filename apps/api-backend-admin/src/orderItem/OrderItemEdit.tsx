import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { ProductTitle } from "../product/ProductTitle";
import { VariantTitle } from "../variant/VariantTitle";

export const OrderItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="order.id" reference="Order" label="order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="qty" source="qty" />
        <TextInput label="titleSnapshot" source="titleSnapshot" />
        <NumberInput step={1} label="unitPrice" source="unitPrice" />
        <ReferenceInput source="variant.id" reference="Variant" label="variant">
          <SelectInput optionText={VariantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
