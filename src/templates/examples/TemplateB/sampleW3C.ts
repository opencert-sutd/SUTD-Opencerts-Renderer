import { v3 } from "@trustvc/trustvc";
import { TemplateBSchemaW3C } from "./types";

export const TemplateBSampleW3C: TemplateBSchemaW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/bbs/v1",
    "https://trustvc.io/context/render-method-context.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/bill-of-lading.json"
  ],
  "type": [
    "VerifiableCredential"
  ],
  "renderMethod": [
    {
      "id": "http://localhost:3000",
      "type": "EMBEDDED_RENDERER",
      "templateName": "TEMPLATE_B"
    }
  ],
  "credentialSubject": {
    "type": [
      "BillOfLading"
    ],
    id: "2034",
    date: "2018-02-21",
    customerId: "564",
    terms: "Due Upon Receipt",
    billFrom: {
      name: "ABC Company",
      streetAddress: "Level 1, Industry Offices",
      city: "Singapore",
      postalCode: "123456",
      phoneNumber: "60305029",
    },
    billTo: {
      company: {
        name: "DEF Company",
        streetAddress: "Level 2, Industry Offices",
        city: "Singapore",
        postalCode: "612345",
        phoneNumber: "61204028",
      },
      name: "James Lee",
      email: "def@company.com",
    },
    billableItems: [
      {
        description: "Service Fee",
        quantity: "1",
        unitPrice: "200",
        amount: "200",
      },
      {
        description: "Labor: 5 hours at $75/hr",
        quantity: "5",
        unitPrice: "75",
        amount: "375",
      },
      {
        description: "New client discount",
        quantity: "1",
        unitPrice: "50",
        amount: "50",
      },
    ],
    subtotal: "625",
    tax: "0",
    taxTotal: "0",
    total: "625",
  },
  "issuanceDate": "2025-07-01T13:08:52.117Z",
  "expirationDate": "2025-10-01T13:08:52.117Z",
  "issuer": "did:web:trustvc.github.io:did:1",
  "id": "urn:bnid:_:0197c61a-c317-7770-bf8e-da0c2ba870a3"
};
