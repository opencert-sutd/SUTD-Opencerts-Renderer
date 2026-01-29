import { TemplateAWithQRCode } from "./TemplateAWithQRCode";
import { TemplateAWithWaterMark } from "./TemplateAWithWaterMark";
import { TemplateAWithWrapperAndErrorBoundary } from "./TemplateAWithWrapperAndErrorBoundary";

export const TemplateATemplates = [
  {
    id: "template-a-with-qr",
    label: "Template with QR Code",
    template: TemplateAWithQRCode,
  },
  {
    id: "template-a-with-wrapper-and-error-boundary",
    label: "Template with Wrapper and Error Boundary",
    template: TemplateAWithWrapperAndErrorBoundary,
  },
  {
    id: "template-a-with-watermark",
    label: "With water mark",
    template: TemplateAWithWaterMark,
  },
];
