import PropTypes from "prop-types";
import React from "react";
import { get } from "lodash";
import { tz } from "moment-timezone";
import _ from "lodash";
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

const title = {
  fontFamily: "Arial",
  fontSize: "22px",
  fontWeight: "bold",
  color: "black"
};

const redTitle = {
  fontFamily: "Arial",
  fontSize: "22px",
  color: "brown"
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
  borderBottom: "1px solid #ddd",
  paddingBottom: "12px"
};

const logoStyle = {
  width: "230px",
  height: "auto"
};

const sectionStyle = {
  marginTop: "24px"
};

const infoGridStyle = {
  display: "grid",
  gridTemplateColumns: "180px 1fr 130px 220px",
  columnGap: "10px",
  rowGap: "10px",
  marginTop: "18px"
};

const tableHeaderStyle = {
  display: "grid",
  gridTemplateColumns: "160px 1fr 90px 90px 90px",
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  padding: "6px 0",
  marginTop: "24px"
};

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "160px 1fr 90px 90px 90px",
  padding: "8px 0"
};

const footerLineStyle = {
  border: "none",
  borderTop: "1px solid black",
  margin: "18px 0"
};

export const Plan = ({ document }) => {
  const degreePlan = get(document, "recipient.TransPlan", undefined);

  return degreePlan ? (
    <>
      <div style={text}>Plan :</div>
      <div style={bold}>{degreePlan}</div>
      <div />
      <div />
    </>
  ) : null;
};

export const SubjectGrades = ({ document }) => {
  const semesters = _(document.transcript)
    .groupBy(t => t.semester)
    .map((values, key) => ({
      semester: key,
      grades: values
    }))
    .orderBy(s => s.semester)
    .value();

  return (
    <div>
      {semesters.map((s, j) => {
        const cgpa1 = get(s.grades, "[0].cumGPA");
        const cgpa = cgpa1 === 0 ? "Not Applicable" : cgpa1;

        const tgpa1 = get(s.grades, "[0].termGPA");
        const tgpa = tgpa1 === 0 ? "Not Applicable" : tgpa1;

        return (
          <div key={j} style={{ marginTop: "14px" }}>
            <div style={{ ...bold, textTransform: "uppercase", marginBottom: "12px" }}>
              {s.semester}
            </div>

            {s.grades.map((t, i) => (
              <div style={rowStyle} key={i}>
                <div style={{ ...text, gridColumn:  (t.name && t.name.trim()) ? "auto": "span 2"}}>{t.courseCode}</div>              
                <div style={text}>{t.name}</div>
                <div style={{ ...text, textAlign: "center" }}>{t.courseLevel}</div>
                <div style={{ ...text, textAlign: "center" }}>{t.courseCredit}</div>
                <div style={text}>{t.grade}</div>
              </div>
            ))}

            <div style={{ marginTop: "12px" }}>
              <div style={text}>
                Term Grade Point Average : <strong>{tgpa}</strong>
              </div>
              <div style={text}>
                Cumulative Grade Point Average : <strong>{cgpa}</strong>
              </div>
              <div style={{ ...bold, fontSize: "24px", textAlign: "center" }}>*****</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const RemarksFooter = ({ document }) => {
  const remarks = get(document, "additionalData.Remarks", undefined);
  const remarksText = remarks ? remarks.replace(/\\n/g, "\n") : null;

  return remarks ? (
    <div>
      <hr style={footerLineStyle} />
      <div style={bold}>Remarks:</div>
      <div style={{ ...text, whiteSpace: "pre-wrap", marginTop: "10px" }}>
        {remarksText}
      </div>
    </div>
  ) : null;
};

export const AwardsFooter = ({ document }) => {
  const awards = get(document, "additionalData.Awards", undefined);
  const awardsText = awards ? awards.replace(/\\n/g, "\n") : null;

  return awards ? (
    <div style={sectionStyle}>
      <div style={bold}>Awards:</div>
      <div style={{ ...text, whiteSpace: "pre-wrap", marginTop: "10px" }}>
        {awardsText}
      </div>
    </div>
  ) : null;
};

export const ThesisFooter = ({ document }) => {
  const thesis = get(document, "additionalData.Thesis", undefined);

  return thesis ? (
    <div style={sectionStyle}>
      <span style={text}>Thesis Title: {thesis}</span>
    </div>
  ) : null;
};

export const DegreeFooter = ({ document }) => {
  const degree1 = get(document, "additionalData.Degree", undefined);
  const degree2 = get(document, "additionalData.Degree2", undefined);

  const degree11 = degree1 ? degree1.replace(/\\n/g, "\n") : null;
  const degree22 = degree2 ? degree2.replace(/\\n/g, "\n") : null;

  return (
    <div style={sectionStyle}>
      <div style={bold}>Conferred the degree(s) of:</div>

      <ul style={{ marginTop: "10px" }}>
        {degree11 && (
          <li>
            <span style={{ ...text, whiteSpace: "pre-wrap" }}>{degree11}</span>
          </li>
        )}

        {degree22 && (
          <li>
            <span style={{ ...text, whiteSpace: "pre-wrap" }}>{degree22}</span>
          </li>
        )}
      </ul>

      <div style={text}>On: {formatDateFullMonthProper(document.issuedOn)}</div>
    </div>
  );
};

export const TXTFooter = ({ document }) => {
  const txtData = get(document, "additionalData.TxtData", undefined);

  return txtData ? (
    <div style={sectionStyle}>
      <span style={text}>{txtData}</span>
    </div>
  ) : null;
};

const Transcript = ({ document }) => (
  <div style={outerWrapperStyle}>
    <div style={pageStyle}>
      <div style={headerStyle}>
        <div>
          <span style={title}>Office of the Registrar</span>
        <div style={{ marginTop: "16px", marginBottom: "8px" }}>
          <span style={redTitle}>Academic Transcript</span>
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
        <div style={bold}>{document.recipient.name}</div>
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
        <div style={text}>Status :</div>
        <div style={bold}>{document.recipient.Status}</div>

        <Plan document={document} />
      </div>

      <div style={tableHeaderStyle}>
        <div style={bold}>Subject Code</div>
        <div style={bold}>Subject Title</div>
        <div style={{ ...bold, textAlign: "center" }}>Level</div>
        <div style={{ ...bold, textAlign: "center" }}>Credits</div>
        <div style={bold}>Grade</div>
      </div>

      <SubjectGrades document={document} />

      <RemarksFooter document={document} />
      <AwardsFooter document={document} />

      <hr style={footerLineStyle} />

      <ThesisFooter document={document} />
      <DegreeFooter document={document} />
      <TXTFooter document={document} />

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

      <hr style={{ border: "none", borderTop: "1px solid brown", margin: "20px 0" }} />

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
