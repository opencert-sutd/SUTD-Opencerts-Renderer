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

const text12 = {
  fontFamily: "Gotham Medium",
  fontSize: "12px",
  textAlign: "center",
  color: "black"
};

const text10 = {
  fontFamily: "Gotham Medium",
  fontSize: "10px",
  textAlign: "center",
  color: "black"
};

const text8 = {
  fontFamily: "Gotham Medium",
  fontSize: "7px",
  textAlign: "right",
  color: "black"
};

const degreeText = {
  fontFamily: "Gotham Medium",
  fontSize: "22px",
  textAlign: "center",
  color: "Brown"
};

const nameText = {
  fontFamily: "Gotham Medium",
  fontSize: "26.5px",
  textAlign: "center",
  color: "Black"
};

const subText = {
  fontFamily: "Gotham Medium",
  fontSize: "16.5px",
  textAlign: "center",
  color: "Brown"
};

const dateText = {
  fontFamily: "Gotham Medium",
  fontWeight: "bold",
  fontSize: "12px",
  textAlign: "center",
  color: "black"
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
  border: "1px solid black",
  backgroundPosition: "1px",
  backgroundRepeat: "repeat",
  backgroundImage: `url(${SUTD_CERT_BG})`,
  backgroundSize: "75px 75px",
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden"
};

const sutdLogoStyle = {
  position: "absolute",
  top: "38px",
  left: "145px",
  width: "150px",
  height: "60px",
  objectFit: "contain"
};

const nusLogoStyle = {
  position: "absolute",
  top: "28px",
  right: "195px",
  width: "120px",
  height: "110px",
  objectFit: "contain"
};

const mainContentStyle = {
  position: "absolute",
  top: "175px",
  left: "0",
  width: "100%",
  textAlign: "center"
};

const centerRowStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
};

const signatureAreaStyle = {
  position: "absolute",
  left: "0",
  bottom: "55px",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "260px",
  padding: "0 155px",
  boxSizing: "border-box"
};

const signatureColumnStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "28px"
};

const signatureBlockStyle = {
  width: "220px",
  textAlign: "center"
};

const signatureImgStyle = {
  width: "150px",
  height: "60px",
  objectFit: "contain",
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
    <div style={centerRowStyle}>
      <span style={subText}>{degreePlan}</span>
    </div>
  ) : null;
};

export const SubPlan1 = ({ document }) => {
  const subPlan1 = get(document, "recipient.SubPlan1", undefined);

  return subPlan1 ? (
    <div style={centerRowStyle}>
      <span style={subText}>{subPlan1}</span>
    </div>
  ) : null;
};

const SignBlock = ({ signature, type, university }) => (
  <div style={signatureBlockStyle}>
    <img src={signature} style={signatureImgStyle} alt={type} />
    <div>
      <span style={text10}>{type}</span>
    </div>
    <div>
      <span style={text10}>{university}</span>
    </div>
  </div>
);

const Template = ({ document }) => (
  <div style={outerWrapperStyle}>
    <div style={certificateStyle}>
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

      <div style={mainContentStyle}>
        <div style={centerRowStyle}>
          <span style={text12}>
            The Singapore University of Technology and Design
          </span>
        </div>

        <div style={centerRowStyle}>
          <span style={text12}>
            and the National University of Singapore hereby jointly confer on
          </span>
        </div>

        <div style={{ ...centerRowStyle, height: "80px" }}>
          <span style={nameText}>{document.recipient.name}</span>
        </div>

        <div style={centerRowStyle}>
          <span style={text12}>the degree of</span>
        </div>

        <div style={{ ...centerRowStyle, marginTop: "12px" }}>
          <span style={degreeText}>{document.name}</span>
        </div>

        <Plan document={document} />

        <div style={centerRowStyle}>
          <span style={subText}>{document.recipient.Honors}</span>
        </div>

        <div style={centerRowStyle}>
          <span style={subText}>{document.recipient.SubPlan}</span>
        </div>

        <SubPlan1 document={document} />

        <div style={{ ...centerRowStyle, marginTop: "22px" }}>
          <span style={text12}>
            with all its honour, privileges and obligations on
          </span>
        </div>

        <div style={{ ...centerRowStyle, marginTop: "18px" }}>
          <span style={dateText}>
            {formatDateFullMonthProper(document.issuedOn)}
          </span>
        </div>
      </div>

      <div style={signatureAreaStyle}>
        <div style={signatureColumnStyle}>
          <SignBlock
            signature={document.additionalData.certSignatories[0].signature}
            type={document.additionalData.Signatorytype[0].type}
            university="Singapore University of Technology and Design"
          />

          <SignBlock
            signature={document.additionalData.certSignatories[1].signature}
            type={document.additionalData.Signatorytype[1].type}
            university="Singapore University of Technology and Design"
          />
        </div>

        <div style={signatureColumnStyle}>
          <SignBlock
            signature={document.additionalData.certSignatories[2].signature}
            type={document.additionalData.Signatorytype[2].type}
            university="National University of Singapore"
          />

          <SignBlock
            signature={document.additionalData.certSignatories[3].signature}
            type={document.additionalData.Signatorytype[3].type}
            university="National University of Singapore"
          />
        </div>
      </div>

      <div style={serialStyle}>
        <span style={text8}>Serial No. {document.recipient.DegID}</span>
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
