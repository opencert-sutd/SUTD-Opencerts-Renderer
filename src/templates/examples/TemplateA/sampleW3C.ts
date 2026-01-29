import { TemplateW3C } from "./types";

export const TemplateASampleW3C: TemplateW3C = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/bbs/v1",
    "https://trustvc.io/context/render-method-context.json"
  ],
  "type": [
    "VerifiableCredential"
  ],
  "renderMethod": [
    {
      "id": "http://localhost:3000",
      "type": "TEMPLATE_A",
      "templateName": "BILL_OF_LADING"
    }
  ],
  "credentialSubject": {
    "type": [
      "BillOfLading"
    ],
    data1: "data1",
    data2: "data2",
  },
  "issuer": "did:web:trustvc.github.io:did:1",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "id": "urn:bnid:_:0197c61a-c317-7770-bf8e-da0c2ba870a3"
};
