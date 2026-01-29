import PropTypes from "prop-types";
import React from "react";
import { get } from "lodash";
import _ from "lodash";
import { tz } from "moment-timezone";
import { format, parseISO } from "date-fns";
import {  SUTD_CERT_LOGO,
  SUTD_SEAL,
  SUTD_FOOTER_1,
  SUTD_FOOTER_2,
  SUTD_FOOTER_3
} from "./images";

export const TIMEZONE = "Asia/Singapore";
export const TIMEZONE1 = "Singapore Standard Time";

export const formatDateFullMonthProper = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("D MMMM YYYY");
};

//Added By Suresh For DOB field in Cert On Jan 2021 Begin
export const formatDateFullMonth = dateString => {
  if (!dateString) return null;
   dateString = dateString.replace("+08:00","");
   const date = new Date(dateString);	
   return tz(date, TIMEZONE).format("D MMMM YYYY");
};
//Added By Suresh For DOB field in Cert Jan-2021 End

const GothamMedium12pt = {
  fontFamily: "Arial",
  fontSize: "1.5em",
  textAlign: "center",
  color: "brown"
};

const Arial12pt = {
  fontFamily: "Arial",
  fontSize: "18px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

const Arial25pt = {
  fontFamily: "Arial",
  fontSize: "25px",
  fontStyle: "Bold",
  textAlign: "center",
  color: "Black"
};

const Arial20pt = {
  fontFamily: "Arial",
  fontSize: "20px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

const Arial15pt = {
  fontFamily: "Arial",
  fontSize: "16px",
  fontStyle: "Bold",
  color: "Black"
};

const Arial5pt = {
  fontFamily: "Arial",
  fontSize: "10px",
  color: "Brown"
};

const Arial15ptp = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "Bold",
  textAlign: "left",
  color: "Black",
  "white-space": "pre-wrap",
  marginLeft: "4rem",
  textTransform: "uppercase"
};

const Arial14ptp = {
  fontFamily: "Arial",
  fontSize: "16px",
  fontStyle: "Bold",
  textAlign: "left",
  color: "Black",
  "white-space": "pre-wrap",

};

export const thWidth60Left = {
  width: "60%",
  textAlign: "left"
};

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};

export const SubjectGrades = ({ document }) => {
  const fifthrowtype = _(document.transcript)
    .groupBy(t => t.Type)
    .map((values, key) => ({
      Type: key,
      name: values
    }))
    .orderBy(s => s.Seq)
    .value();

  const semesterHeader = s => (
    <div className="row">
      <div className="col-12"><span style={Arial20pt}>{s.Type}</span></div>
    </div>
  );
  

  const subjects = fifthrowtype.map((s, j) => {
    const semesterSubjects = s.name.map((t, i) => (
    <div className="row" key={i}>
		<div className="fifth-row-cell-1 col-7">
          <span style={Arial15pt}>{t.name}</span>
        </div>
        <div className="fifth-row-cell-2 col-4">
          <span style={Arial15pt}>{t.Period}</span>
        </div>
    </div>
    ));	
	
    const semesterSubjects_Award = s.name.map((t, i) => (
    <div className="row" key={i}>
		<div className="fifth-row-cell-1 col-6">
          <span style={Arial15pt}>{t.name}</span>
        </div>
		<div className="fifth-row-cell-1 col-1">
          <span style={Arial15pt}>{t.Level}</span>
        </div>		
        <div className="fifth-row-cell-2 col-4">
          <span style={Arial15pt}>{t.Period}</span>
        </div>
    </div>
    ));	
	
	const Title = get(s.name, "[0].Title");
	const Level = get(s.name, "[0].Level");
	
    return Level ? (
    <div key={j}>
        {semesterHeader(s)}
	  	<br/>
		<div className="row">
		    <div className="fifth-row-cell-1 col-6">
			<span style={Arial15pt}><strong>{Title}</strong></span>
            </div>
			<div className="fifth-row-cell-1 col-1">
			<span style={Arial15pt}><strong>Level</strong></span>
			</div>
			<div className="fifth-row-cell-2 col-4">
			<span style={Arial15pt}><strong>Period</strong></span>
			</div>
		</div>
			{semesterSubjects_Award} 
        <br/>

    </div>
    ) : 
	(<div key={j}>
        {semesterHeader(s)}
	  	<br/>
		<div className="row">
		    <div className="fifth-row-cell-1 col-7">
			<span style={Arial15pt}><strong>{Title}</strong></span>
            </div>
			<div className="fifth-row-cell-2 col-4">
			<span style={Arial15pt}><strong>Period</strong></span>
			</div>
		</div>
			{semesterSubjects} 
        <br/>

    </div>);
  });

  return <div>{subjects}</div>;
};

const Transcript = ({ document }) => (
  <div className="container">
    <div className="transcript-content">
      <style>
        {`
      .sutd-logo {
        padding-top:1.2em;
        float:right;
        width:20%;
      }
	  
	  .Title2 {
        padding-top:1em;
        float:left;
		font-family: Arial;
        font-size:1.5em;
		font-weight:bold
      }
      
      .page-title {
        font-weight:bold;
		color:Brown;
        font-size:1.5em;
        padding-top:1em;

      }
	  
	  .sutd-seal{
        width:80%;
      }
	  
	 .page-title2{
        font-weight:bold;
		font-color:red;
        font-size:1em;
        padding-top:3em;
        text-align:left;
      }
	  
	  .exam-results-header {
        border-top: 2px solid #212529;
        border-bottom: 2px solid #212529;
        margin-bottom:0.8em;
        font-weight: bold
      }
	  
.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}

      .semester-header{
        font-weight: bold;
        text-transform:uppercase;
      }

      .semester-header.exemption {
        text-transform: none;
      }

      .credit-unit {
        text-align: center
      }
	  
      .grade {
        text-align: left
      }
	  
      .name {
        text-align: left
      }	  
	  
	.fifth-row-cell-1 {
      border: 1px solid #212529;
	  border-right:none;
    }
	
	.fifth-row-cell-2 {
      border: 1px solid #212529;
    }

      .exam-results-footer{
        font-weight: bold
      }
      `}
      </style>
      <br />
      <br />
      <div className="row">
        <div className="col-12">
          <div className="Title2">Office of the Registrar</div>
          <img
            src={SUTD_CERT_LOGO}
            className="sutd-logo"
            title="Singapore University of Technology and Design"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-5">
          <span style={GothamMedium12pt}>Fifth Row Activities</span>
        </div>
      </div>
      <div className="row">
        <hr align="center" width="100%" color="brown" />
      </div>


      <div className="row">
        <div className="col-7">
	<span style={Arial12pt}>{document.recipient.name}</span>
        </div>
		<br/>
		<br/>
        <div className="col-7">
          <div className="row">
            <div className="col-7">
              <span style={Arial15pt}>SUTD ID :<strong>{document.recipient.studentId}</strong></span>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <span style={Arial15pt}>Date of Birth :{" "}
              <strong>
                {formatDateFullMonth(document.recipient.Birthdate)}
              </strong></span>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <span style={Arial15pt}>Date of Admission :{" "}
              <strong>
                {formatDateFullMonthProper(document.recipient.AdmissionDate)}
              </strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2" style={{ marginTop: "1rem" }}>
          {" "}
          <span style={Arial15pt}>Programme :</span>
        </div>
        <div className="col-5" style={{ marginTop: "1rem" }}>
          {" "}
          <span style={Arial15pt}><strong>{document.recipient.Programme}</strong></span>
        </div>

      </div>
	   <div style={{ marginTop: "2rem" }}>
          {" "}
          <span style={Arial15pt}>Fifth Row Activities are activities undertaken by students outside the classroom. Please refer to the guide at the back for more information.</span>
        </div>
      <br />

      <div>
        <SubjectGrades document={document} />
      </div>
	  
	  
	<hr align="center" width="100%" color="black" />
      <div className="row d-flex justify-content-center">
        <span style={Arial15pt}>
          <strong>-END OF RECORD-</strong>
        </span>
      </div>
      <div className="row d-flex justify-content-center">
        <span style={Arial15pt}>
          <strong>-No Entries Valid Below This Line-</strong>
        </span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="col-5">
        <div>
          <img src={SUTD_SEAL} className="sutd-seal" />
        </div>
      </div>

      <hr align="center" width="100%" color="Brown" />

      <div className="d-flex justify-content-center">
        <div>
          <span style={Arial5pt}>
            {
              "An official transcript is printed on watermarked security paper and endorsed with the Registrar's signature in blue. A raised seal is not required."
            }
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div>
          <span style={Arial5pt}>
            A black and white transcript is not an original. Transcript guide on
            back.
          </span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="row">
        <div className="col-5">
          <div>
            <img src={document.additionalData.footer[0].footer} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div>
            <img src={document.additionalData.footer[1].footer} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div>
            <img src={document.additionalData.footer[2].footer} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Transcript.propTypes = {
  document: PropTypes.object.isRequired
};

export default Transcript;
