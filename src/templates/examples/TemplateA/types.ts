import { SignedVerifiableCredential, v2, v3 } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export type TemplateAV2 = v2.OpenAttestationDocument & TemplateADocument;
export type TemplateAV3 = v3.OpenAttestationDocument & {
  credentialSubject: TemplateADocument;
};

export type TemplateW3C = SignedVerifiableCredential & {
  credentialSubject: CredentialSubject & TemplateADocument;
};

export type TemplateASchema = TemplateAV2 | TemplateAV3 | TemplateW3C;

export interface TemplateADocument {
  data1: string;
  data2: string;
  links?: {
    self: {
      href: string;
    };
  };
}
