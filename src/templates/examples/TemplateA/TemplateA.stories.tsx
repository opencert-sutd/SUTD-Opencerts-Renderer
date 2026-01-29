import React, { FunctionComponent } from "react";
import { TemplateAWithQRCode } from "./TemplateAWithQRCode";
import { TemplateASampleV2 } from "./sampleV2";
import { TemplateASampleV3 } from "./sampleV3";
import { TemplateASampleW3C } from "./sampleW3C";
import { TemplateAWithWaterMark } from "./TemplateAWithWaterMark";
import { TemplateAWithWrapperAndErrorBoundary } from "./TemplateAWithWrapperAndErrorBoundary";

export default {
  title: "TemplateA",
  component: TemplateAWithQRCode,
  parameters: {
    componentSubtitle: "Sample Template A",
  },
};

export const TemplateWithQRCode: FunctionComponent = () => {
  return <TemplateAWithQRCode document={TemplateASampleV2} handleObfuscation={() => {}} />;
};

export const TemplateWithWrapperAndErrorBoundary: FunctionComponent = ()=> {
  return <TemplateAWithWrapperAndErrorBoundary document={TemplateASampleV3} handleObfuscation={() => {}} />;
}

export const TemplateWithWaterMark: FunctionComponent = ()=> {
  return <TemplateAWithWaterMark document={TemplateASampleW3C} handleObfuscation={() => {}} />;
}
