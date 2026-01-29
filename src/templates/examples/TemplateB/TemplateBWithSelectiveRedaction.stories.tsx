import React, { FunctionComponent } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TemplateBWithSelectiveRedaction } from "./TemplateBWithSelectiveRedaction";
import { TemplateBSampleV2 } from "./sampleV2";
import { TemplateBSampleW3C } from "./sampleW3C";
import { TemplateBSchema } from "./types";

export default {
  title: "TemplateB",
  component: TemplateBWithSelectiveRedaction,
  parameters: {
    componentSubtitle: "Sample Template B",
  }
} as Meta;

export const TemplateWithSelectiveRedaction: FunctionComponent = () => {
  return (
    <TemplateBWithSelectiveRedaction
      document={TemplateBSampleV2}
      handleObfuscation={() => { }}
    />
  );
};

export const TemplateWithSelectiveRedactionWithW3C: FunctionComponent = () => {
  return (
    <TemplateBWithSelectiveRedaction
      document={TemplateBSampleW3C}
      handleObfuscation={() => { }}
    />
  );
};

// Create a type for our custom story controls
type TemplateCustomizationArgs = {
  id?: string;
  date?: string;
  customerId?: string;
  terms?: string;
  billFromName?: string;
  billFromStreetAddress?: string;
  billFromCity?: string;
  billFromPostalCode?: string;
  billFromPhoneNumber?: string;
  billToName?: string;
  billToEmail?: string;
  billToCompanyName?: string;
  billToCompanyStreetAddress?: string;
  billToCompanyCity?: string;
  billToCompanyPostalCode?: string;
  billToCompanyPhoneNumber?: string;
  subtotal?: string;
  tax?: string;
  taxTotal?: string;
  total?: string;
};

const Template_: StoryFn<TemplateCustomizationArgs> = (args) => {
  // Use default values if properties are undefined
  const billFrom = TemplateBSampleV2.billFrom || {
    name: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    phoneNumber: ''
  };
  const billTo = TemplateBSampleV2.billTo || {
    name: '',
    email: '',
    company: {
      name: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      phoneNumber: ''
    }
  };
  const billToCompany = billTo.company || {
    name: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    phoneNumber: ''
  };

  const documentWithProperties = {
    ...TemplateBSampleV2,
    id: args.id ?? TemplateBSampleV2.id,
    date: args.date ?? TemplateBSampleV2.date,
    customerId: args.customerId ?? TemplateBSampleV2.customerId,
    terms: args.terms ?? TemplateBSampleV2.terms,
    subtotal: args.subtotal ?? TemplateBSampleV2.subtotal,
    tax: args.tax ?? TemplateBSampleV2.tax,
    taxTotal: args.taxTotal ?? TemplateBSampleV2.taxTotal,
    total: args.total ?? TemplateBSampleV2.total,
    // Handle nested objects
    billFrom: {
      ...billFrom,
      name: args.billFromName ?? billFrom.name,
      streetAddress: args.billFromStreetAddress ?? billFrom.streetAddress,
      city: args.billFromCity ?? billFrom.city,
      postalCode: args.billFromPostalCode ?? billFrom.postalCode,
      phoneNumber: args.billFromPhoneNumber ?? billFrom.phoneNumber
    },
    billTo: {
      ...billTo,
      name: args.billToName ?? billTo.name,
      email: args.billToEmail ?? billTo.email,
      company: {
        ...billToCompany,
        name: args.billToCompanyName ?? billToCompany.name,
        streetAddress: args.billToCompanyStreetAddress ?? billToCompany.streetAddress,
        city: args.billToCompanyCity ?? billToCompany.city,
        postalCode: args.billToCompanyPostalCode ?? billToCompany.postalCode,
        phoneNumber: args.billToCompanyPhoneNumber ?? billToCompany.phoneNumber
      }
    }
  };

  return (
    <TemplateBWithSelectiveRedaction
      document={documentWithProperties as TemplateBSchema}
      handleObfuscation={() => { }}
    />
  );
};

export const TemplateWithCustomization = Template_.bind({});
TemplateWithCustomization.argTypes = {
  // Invoice details
  id: { control: 'text', description: 'Invoice ID' },
  date: { control: 'date', description: 'Invoice Date' },
  customerId: { control: 'text', description: 'Customer ID' },
  terms: { control: 'text', description: 'Payment Terms' },

  // Bill from
  billFromName: { control: 'text', description: 'Billing Company Name' },
  billFromStreetAddress: { control: 'text', description: 'Billing Street Address' },
  billFromCity: { control: 'text', description: 'Billing City' },
  billFromPostalCode: { control: 'text', description: 'Billing Postal Code' },
  billFromPhoneNumber: { control: 'text', description: 'Billing Phone Number' },

  // Bill to
  billToName: { control: 'text', description: 'Customer Name' },
  billToEmail: { control: 'text', description: 'Customer Email' },
  billToCompanyName: { control: 'text', description: 'Customer Company Name' },
  billToCompanyStreetAddress: { control: 'text', description: 'Customer Street Address' },
  billToCompanyCity: { control: 'text', description: 'Customer City' },
  billToCompanyPostalCode: { control: 'text', description: 'Customer Postal Code' },
  billToCompanyPhoneNumber: { control: 'text', description: 'Customer Phone Number' },

  // Totals
  subtotal: { control: 'text', description: 'Subtotal' },
  tax: { control: 'text', description: 'Tax Rate' },
  taxTotal: { control: 'text', description: 'Tax Amount' },
  total: { control: 'text', description: 'Total Amount' }
};
