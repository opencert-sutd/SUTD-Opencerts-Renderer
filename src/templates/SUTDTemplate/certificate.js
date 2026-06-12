import PropTypes from "prop-types";
import React from "react";
import { tz } from "moment-timezone";
import { get } from "lodash";
import {
  SUTD_CERT_BG,
  SUTD_CERT_LOGO
} from "./images";

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
  height: "730px",
  margin: "0 auto",
  border: "1px solid black",
  backgroundPosition: "1px",
  backgroundRepeat: "repeat",
  backgroundImage: `url(${SUTD_CERT_BG})`,
  backgroundSize: "75px 75px",
  boxSizing: "border-box",
  position: "relative",
  paddingTop: "45px",
  overflow: "hidden"
};

const logoImgStyle = {
  width: "150px",
  height: "60px",
  display: "block",
  margin: "0 auto"
};

const centerRowStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
};

const chairImgStyle = {
  width: "230px",
  height: "60px",
  borderBottom: "1px solid black"
};

const presidentImgStyle = {
  width: "230px",
  height: "60px",
  borderBottom: "1px solid black"
};

const serialStyle = {
  position: "absolute",
  right: "35px",
  bottom: "12px"
};

export const Plan = ({ document }) => {
  const degreePlan = get(document, "recipient.Plan", undefined);
  return degreePlan ? (
    <div style={{ ...centerRowStyle, marginTop: "6px" }}>
      <span style={GothamMedium165pt}>{degreePlan}</span>
    </div>
  ) : null;
};

export const SubPlan1 = ({ document }) => {
  const subPlan1 = get(document, "recipient.SubPlan1", undefined);
  return subPlan1 ? (
    <div style={{ ...centerRowStyle, marginTop: "6px" }}>
      <span style={GothamMedium165pt}>{subPlan1}</span>
    </div>
  ) : null;
};

const countOptionalLines = (document) => {
  let count = 0;
  if (get(document, "recipient.Plan")) count++;
  if (get(document, "recipient.Honors")) count++;
  if (get(document, "recipient.SubPlan")) count++;
  if (get(document, "recipient.SubPlan1")) count++;
  return count;
};

const Template = ({ document }) => {
  const optionalLines = countOptionalLines(document);
  const signatureTopMargin = Math.max(8, 55 - optionalLines * 12);

  const signatureSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "950px",
    margin: `${signatureTopMargin}px auto 0 auto`
  };

  return (
    <div style={outerWrapperStyle}>
      <div style={certificateStyle}>
        <img
          src={SUTD_CERT_LOGO}
          style={logoImgStyle}
          alt="SUTD Logo"
        />

        <div style={{ marginTop: "45px" }}>
          <hr
            style={{
              width: "35%",
              height: "2px",
              backgroundColor: "black",
              border: "none",
              margin: "0 auto 20px auto"
            }}
          />

          <div style={centerRowStyle}>
            <span style={GothamMedium12pt}>
              Singapore University of Technology and Design
            </span>
          </div>

          <div style={centerRowStyle}>
            <span style={GothamMedium12pt}>
              upon the recommendation of the Faculty hereby confers on
            </span>
          </div>

          <div
            style={{
              ...centerRowStyle,
              height: "80px",
              lineHeight: "175%"
            }}
          >
            <span style={GothamMedium265pt}>
              {document.recipient.name}
            </span>
          </div>

          <div style={{ ...centerRowStyle, marginBottom: "8px" }}>
            <span style={GothamMedium12pt}>the degree of</span>
          </div>

          <div style={centerRowStyle}>
            <span style={GothamMedium22pt}>{document.name}</span>
          </div>

          <Plan document={document} />

          {document.recipient.Honors && (
            <div style={{ ...centerRowStyle, marginTop: "6px" }}>
              <span style={GothamMedium165pt}>
                {document.recipient.Honors}
              </span>
            </div>
          )}

          {document.recipient.SubPlan && (
            <div style={{ ...centerRowStyle, marginTop: "6px" }}>
              <span style={GothamMedium165pt}>
                {document.recipient.SubPlan}
              </span>
            </div>
          )}

          <SubPlan1 document={document} />

          <div style={{ ...centerRowStyle, marginTop: "20px" }}>
            <span style={GothamMedium12pt}>
              with all its honor, privileges and obligations on
            </span>
          </div>

          <div style={{ ...centerRowStyle, marginTop: "10px" }}>
            <span style={GothamBold12pt}>
              {formatDateFullMonthProper(document.issuedOn)}
            </span>
          </div>
        </div>

        <div style={signatureSectionStyle}>
          <div style={{ width: "260px", textAlign: "center" }}>
            <img
              src={document.additionalData.certSignatories[0].signature}
              style={chairImgStyle}
              alt="Chair Signature"
            />
            <div>
              <span style={GothamMedium10pt}>
                {document.additionalData.Signatorytype[0].type}
              </span>
            </div>
          </div>

          <div style={{ width: "260px", textAlign: "center" }}>
            <img
              src={document.additionalData.certSignatories[1].signature}
              style={presidentImgStyle}
              alt="President Signature"
            />
            <div>
              <span style={GothamMedium10pt}>
                {document.additionalData.Signatorytype[1].type}
              </span>
            </div>
          </div>
        </div>

        <div style={serialStyle}>
          <span style={GothamMedium8pt}>
            Serial No. {document.recipient.DegID}
          </span>
        </div>
      </div>
    </div>
  );
};

export { Template as SUTD_TEMPLATE };
export default Template;

Template.propTypes = {
  document: PropTypes.object.isRequired
};
