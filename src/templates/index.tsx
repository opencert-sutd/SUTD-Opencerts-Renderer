import { TemplateRegistry } from "@tradetrust-tt/decentralized-renderer-react-components";
//import { TemplateATemplates } from "./examples/TemplateA";
//import { TemplateBTemplates } from "./examples/TemplateB";
import SUTDTemplate from "./SUTDTemplate";
import SUTD5Template from "./SUTD5Template";
import SUTDDuelTemplate from "./SUTDDuelTemplate";

export const registry: TemplateRegistry<any> = {
  // TEMPLATE_A: TemplateATemplates,
  // TEMPLATE_B: TemplateBTemplates,
  SUTD_TEMPLATE: SUTDTemplate,
  SUTD_5TEMPLATE: SUTD5Template,
  SUTD_DUELTEMPLATE: SUTDDuelTemplate,
  };