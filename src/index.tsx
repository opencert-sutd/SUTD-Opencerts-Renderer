import React from "react";
import {
  FramedDocumentRenderer,
  fullAttachmentRenderer,
} from "@tradetrust-tt/decentralized-renderer-react-components";
import { registry } from "./templates";
import "./main.css";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <FramedDocumentRenderer
    templateRegistry={registry}
    attachmentToComponent={fullAttachmentRenderer}
  />
);
