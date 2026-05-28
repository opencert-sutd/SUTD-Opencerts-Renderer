import PropTypes from "prop-types";
import React from "react";
import { get } from "lodash";
import _ from "lodash";
import { tz } from "moment-timezone";
import { SUTD_CERT_LOGO, SUTD_SEAL } from "./images";

export const TIMEZONE = "Asia/Singapore";

export const formatDateFullMonthProper = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("D MMMM YYYY");
};

export const formatDateFullMonth = dateString => {
  if (!dateString) return null;
  dateString = dateString.replace("+08:00", "");
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("D MMMM YYYY");
};

const text = {
  fontFamily: "Arial",
  fontSize: "14px",
  color: "black"
};

const bold = {
  ...text,
  fontWeight: "bold"
};

const smallBrown = {
  fontFamily: "Arial",
  fontSize: "10px",
  color: "brown"
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

const pageStyle = {
  width: "1120px",
  backgroundColor: "#fff",
  boxSizing: "border-box",
  padding: "20px 45px 30px 45px",
  overflow: "visible"
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderBottom: "4px solid #cc0000",
  paddingBottom: "12px",
  marginBottom: "25px"
};

const headerLeftStyle = {
  display: "flex",
  flexDirection: "column"
};

const registrarTitleStyle = {
  fontFamily: "Arial",
  fontSize: "24px",
  color: "black",
  marginBottom: "55px"
};

const diveTitleStyle = {
  fontFamily: "Arial",
  fontSize: "28px",
  color: "#cc0000",
  fontWeight: "400",
  lineHeight: "1.2"
};

const logoStyle = {
  width: "270px",
  height: "auto",
  objectFit: "contain"
};

const sectionStyle = {
  marginTop: "24px"
};

const infoGridStyle = {
  display: "grid",
  gridTemplateColumns: "160px 1fr",
  columnGap: "10px",
  rowGap: "10px",
  marginTop: "18px"
};

const activityIntroStyle = {
  ...text,
  marginTop: "28px",
  lineHeight: "1.5"
};

const tableHeader2Style = {
  display: "grid",
  gridTemplateColumns: "1fr 220px",
  border: "1px solid black",
  marginTop: "12px"
};

const tableHeader3Style = {
  display: "grid",
  gridTemplateColumns: "1fr 100px 220px",
  border: "1px solid black",
  marginTop: "12px"
};

const tableCellStyle = {
  ...text,
  padding: "6px 8px",
  borderRight: "1px solid black"
};

const tableCellLastStyle = {
  ...text,
  padding: "6px 8px"
};

const footerLineStyle = {
  border: "none",
  borderTop: "1px solid black",
  margin: "24px 0 16px 0"
};

export const SubjectGrades = ({ document }) => {
  const fifthRowTypes = _(document.transcript)
    .groupBy(t => t.Type)
    .map((values, key) => ({
      Type: key,
      name: values,
      Seq: get(values, "[0].Seq")
    }))
    .orderBy(s => s.Seq)
    .value();

  return (
    <div style={sectionStyle}>
      {fifthRowTypes.map((s, j) => {
        const titleText = get(s.name, "[0].Title");
        const level = get(s.name, "[0].Level");

        return (
          <div key={j} style={{ marginTop: "22px" }}>
            <div style={{ ...bold, fontSize: "18px", marginBottom: "10px" }}>
              {s.Type}
            </div>

            {level ? (
              <>
                <div style={tableHeader3Style}>
                  <div style={tableCellStyle}>
                    <strong>{titleText}</strong>
                  </div>
                  <div style={tableCellStyle}>
                    <strong>Level</strong>
                  </div>
                  <div style={tableCellLastStyle}>
                    <strong>Period</strong>
                  </div>
                </div>

                {s.name.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 100px 220px",
                      borderLeft: "1px solid black",
                      borderRight: "1px solid black",
                      borderBottom: "1px solid black"
                    }}
                  >
                    <div style={tableCellStyle}>{t.name}</div>
                    <div style={tableCellStyle}>{t.Level}</div>
                    <div style={tableCellLastStyle}>{t.Period}</div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div style={tableHeader2Style}>
                  <div style={tableCellStyle}>
                    <strong>{titleText}</strong>
                  </div>
                  <div style={tableCellLastStyle}>
                    <strong>Period</strong>
                  </div>
                </div>

                {s.name.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 220px",
                      borderLeft: "1px solid black",
                      borderRight: "1px solid black",
                      borderBottom: "1px solid black"
                    }}
                  >
                    <div style={tableCellStyle}>{t.name}</div>
                    <div style={tableCellLastStyle}>{t.Period}</div>
                  </div>
                ))}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Transcript = ({ document }) => (
  <div style={outerWrapperStyle}>
    <div style={pageStyle}>
      <div style={headerStyle}>
        <div style={headerLeftStyle}>
          <div style={registrarTitleStyle}>Office of the Registrar</div>

          <div style={diveTitleStyle}>
            Design Innovation and Venture Exploration (DIVE) Certificate
          </div>
        </div>

        <img
          src={SUTD_CERT_LOGO}
          style={logoStyle}
          title="Singapore University of Technology and Design"
          alt="SUTD Logo"
        />
      </div>

      <div style={sectionStyle}>
        <div style={{ ...bold, fontSize: "16px" }}>
          {document.recipient.name}
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={text}>
          SUTD ID : <strong>{document.recipient.studentId}</strong>
        </div>
        <div style={text}>
          Date of Birth :{" "}
          <strong>{formatDateFullMonth(document.recipient.Birthdate)}</strong>
        </div>
        <div style={text}>
          Date of Admission :{" "}
          <strong>
            {formatDateFullMonthProper(document.recipient.AdmissionDate)}
          </strong>
        </div>
      </div>

      <div style={infoGridStyle}>
        <div style={text}>Programme :</div>
        <div style={bold}>{document.recipient.Programme}</div>
      </div>

      <div style={activityIntroStyle}>
        Fifth Row Activities are activities undertaken by students outside the
        classroom. Please refer to the guide at the back for more information.
      </div>

      <SubjectGrades document={document} />

      <hr style={footerLineStyle} />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div style={bold}>-END OF RECORD-</div>
        <div style={bold}>-No Entries Valid Below This Line-</div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <img
          src={SUTD_SEAL}
          style={{ width: "260px", height: "auto" }}
          alt="SUTD Seal"
        />
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid brown",
          margin: "20px 0"
        }}
      />

      <div style={{ textAlign: "center" }}>
        <div style={smallBrown}>
          An official transcript is printed on watermarked security paper and
          endorsed with the Registrar&apos;s signature in blue. A raised seal is
          not required.
        </div>
        <div style={smallBrown}>
          A black and white transcript is not an original. Transcript guide on
          back.
        </div>
      </div>

      {document.additionalData.footer &&
        document.additionalData.footer.map((item, index) => (
          <div key={index} style={{ marginTop: "10px" }}>
            <img
              src={item.footer}
              style={{ maxWidth: "100%", height: "auto" }}
              alt={`Footer ${index + 1}`}
            />
          </div>
        ))}
    </div>
  </div>
);

Transcript.propTypes = {
  document: PropTypes.object.isRequired
};

export default Transcript;
