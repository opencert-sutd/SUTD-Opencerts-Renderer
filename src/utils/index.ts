import {
  isRawV3Document,
  OpenAttestationDocument,
  RawVerifiableCredential,
  SignedVerifiableCredential,
  vc,
  WrappedOrSignedOpenAttestationDocument,
  isWrappedV2Document,
  isWrappedV3Document,
  getDataV2,
  isRawV2Document,
} from "@trustvc/trustvc";

/**
 * This function is necessary to extract the document data from the data. It makes decentralized renderer templates compatible with v2, v3 and w3c vc document version.
 * @param {OpenAttestationDocument | SignedVerifiableCredential | RawVerifiableCredential} document - The document itself.
 * @returns {document} The extracted data from the document.
 */
export const getDocumentData = (
  document:
    | OpenAttestationDocument
    | SignedVerifiableCredential
    | RawVerifiableCredential
): any => {
  if (
    isWrappedV3Document(document) ||
    isRawV3Document(document) ||
    vc.isSignedDocument(document) ||
    vc.isRawDocument(document)
  ) {
    return document.credentialSubject;
  } else if (isWrappedV2Document(document)) {
    return getDataV2(document);
  } else return document;
};
export const getQRCodeLink = (
  document:
    | WrappedOrSignedOpenAttestationDocument
    | SignedVerifiableCredential
    | RawVerifiableCredential
): any => {
  const documentData = getDocumentData(document as OpenAttestationDocument);
  if (isRawV2Document(documentData) || isWrappedV2Document(document)) {
    const { links } = documentData;
    return links?.self?.href;
  } else if (isRawV3Document(document) || isWrappedV3Document(document)) {
    const { links } = documentData;
    return links?.self?.href;
  } else if (vc.isSignedDocument(document) || vc.isRawDocument(document)) {
    const { qrCode } = document as SignedVerifiableCredential;
    return qrCode?.uri;
  }
};
