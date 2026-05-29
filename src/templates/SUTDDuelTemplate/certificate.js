import PropTypes from "prop-types";
import React from "react";
import { tz } from "moment-timezone";
import { get } from "lodash";
import { SUTD_CERT_BG, SUTD_CERT_LOGO, NUS_CERT_LOGO } from "./images";

export const TIMEZONE = "Asia/Singapore";

export const formatDateFullMonthProper = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("D MMMM YYYY");
};

const GothamMedium22pt = {
  fontFamily: "Gotham Medium",
  fontSize: "22px",
  textAlign: "center",
  color: "Brown"
};

const GothamMedium8pt = {
  fontFamily: "Gotham Medium",
  fontSize: "7px",
  textAlign: "right",
  color: "black"
};

const GothamMedium10pt = {
  fontFamily: "Gotham Medium",
  fontSize: "10px",
  textAlign: "center",
  color: "black"
};

const GothamMedium12pt = {
  fontFamily: "Gotham Medium",
  fontSize: "12px",
  textAlign: "center",
  color: "black"
};

const GothamBold12pt = {
  fontFamily: "Gotham Medium",
  fontWeight: "bold",
  fontSize: "12px",
  textAlign: "center",
  color: "black"
};

const GothamMedium165pt = {
  fontFamily: "Gotham Medium",
  fontSize: "16.5px",
  textAlign: "center",
  color: "Brown"
};

const GothamMedium265pt = {
  fontFamily: "Gotham Medium",
  fontSize: "26.5px",
  textAlign: "center",
  color: "Black"
};

const outerWrapperStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: "transparent",
  padding: "20px 0",
  overflow: "hidden"
};

const certificateStyle = {
  width: "1120px",
  height: "630px",
  margin: "0 auto",
  border: "1px solid black",
  backgroundPosition: "1px",
  backgroundRepeat: "repeat",
  backgroundImage: `url(${SUTD_CERT_BG})`,
  backgroundSize: "75px 75px",
  boxSizing: "border-box",
  position: "relative",
  padding: "42px 50px 28px 50px",
  overflow: "hidden"
};

const logoRowStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "230px",
  marginBottom: "32px"
};

const sutdLogoStyle = {
  width: "150px",
  height: "60px",
  objectFit: "contain"
};

const nusLogoStyle = {
  width: "135px",
  height: "120px",
  objectFit: "contain",
  marginTop: "-20px"
};

const centerRowStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
};

const signatureGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "170px",
  width: "680px",
  margin: "28px auto 0 auto"
};

const signatureBlockStyle = {
  textAlign: "center"
};

const signatureImgStyle = {
  width: "150px",
  height: "60px",
  borderBottom: "1px solid black",
  objectFit: "contain"
};

const serialStyle = {
  position: "absolute",
  right: "35px",
  bottom: "12px"
};

export const Plan = ({ document }) => {
  const degreePlan = get(document, "recipient.Plan", undefined);

  return degreePlan ? (
    <div style={centerRowStyle}>
      <span style={GothamMedium165pt}>{degreePlan}</span>
    </div>
  ) : null;
};

export const SubPlan1 = ({ document }) => {
  const subPlan1 = get(document, "recipient.SubPlan1", undefined);

  return subPlan1 ? (
    <div style={centerRowStyle}>
      <span style={GothamMedium165pt}>{subPlan1}</span>
    </div>
  ) : null;
};

const SignBlock = ({ signature, type, university }) => (
  <div style={signatureBlockStyle}>
    <img src={signature} style={signatureImgStyle} alt={type} />
    <div>
      <span style={GothamMedium10pt}>{type}</span>
    </div>
    <div style={{ marginTop: "-2px" }}>
      <span style={GothamMedium10pt}>{university}</span>
    </div>
  </div>
);

const Template = ({ document }) => (
  <div style={outerWrapperStyle}>
    <div style={certificateStyle}>
      <div style={logoRowStyle}>
        <img
          src={SUTD_CERT_LOGO}
          style={sutdLogoStyle}
          alt="Singapore University of Technology and Design"
        />

        <img
          src={NUS_CERT_LOGO}
          style={nusLogoStyle}
          alt="National University of Singapore"
        />
      </div>

      <div>
        <div style={centerRowStyle}>
          <span style={GothamMedium12pt}>
            The Singapore University of Technology and Design
          </span>
        </div>

        <div style={centerRowStyle}>
          <span style={GothamMedium12pt}>
            and the National University of Singapore hereby jointly confer on
          </span>
        </div>

        <div
          style={{
            ...centerRowStyle,
            height: "80px",
            lineHeight: "175%"
          }}
        >
          <span style={GothamMedium265pt}>{document.recipient.name}</span>
        </div>

        <div style={{ ...centerRowStyle, marginBottom: "8px" }}>
          <span style={GothamMedium12pt}>the degree of</span>
        </div>

        <div style={centerRowStyle}>
          <span style={GothamMedium22pt}>{document.name}</span>
        </div>

        <Plan document={document} />

        <div style={centerRowStyle}>
          <span style={GothamMedium165pt}>
            {document.recipient.Honors}
          </span>
        </div>

        <div style={centerRowStyle}>
          <span style={GothamMedium165pt}>
            {document.recipient.SubPlan}
          </span>
        </div>

        <SubPlan1 document={document} />

        <div style={{ ...centerRowStyle, marginTop: "22px" }}>
          <span style={GothamMedium12pt}>
            with all its honour, privileges and obligations on
          </span>
        </div>

        <div style={{ ...centerRowStyle, marginTop: "16px" }}>
          <span style={GothamBold12pt}>
            {formatDateFullMonthProper(document.issuedOn)}
          </span>
        </div>
      </div>

      <div style={signatureGridStyle}>
        <SignBlock
          signature={document.additionalData.certSignatories[0].signature}
          type={document.additionalData.Signatorytype[0].type}
          university="Singapore University of Technology and Design"
        />

        <SignBlock
          signature={document.additionalData.certSignatories[2].signature}
          type={document.additionalData.Signatorytype[2].type}
          university="National University of Singapore"
        />

        <SignBlock
          signature={document.additionalData.certSignatories[1].signature}
          type={document.additionalData.Signatorytype[1].type}
          university="Singapore University of Technology and Design"
        />

        <SignBlock
          signature={document.additionalData.certSignatories[3].signature}
          type={document.additionalData.Signatorytype[3].type}
          university="National University of Singapore"
        />
      </div>

      <div style={serialStyle}>
        <span style={GothamMedium8pt}>
          Serial No. {document.recipient.DegID}
        </span>
      </div>
    </div>
  </div>
);

SignBlock.propTypes = {
  signature: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired
};

Template.propTypes = {
  document: PropTypes.object.isRequired
};

export default Template;
