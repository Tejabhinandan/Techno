import React from "react";
import "./Responsive.css";

function Responsive() {
  return (
    <div className="container">
      <div className="row">
        <div className=" side bg-secondary col-12 col-sm-8 col-md-6 col-lg-4 border border-dark">
          <br />
          <img
            className="rounded-circle profile col col-sm-8 col-md-6 col-lg-4"
            src="https://cdn.pixabay.com/photo/2020/08/10/23/35/character-5478933__340.png"
            alt="pro"
          />
          <h2 className="text">About Me</h2>
          <p  className="text">
            Access to several resume templates that will save you the time and
            hassle.Generate several downloadable templates according to your
            objective and preference.Developed and reviewed by experts, it takes
            the guess work out of creating a resume that is ATS-Friendly
            (Applicant Tracking System).
          </p>
          <hr className="border border-white"/>
        </div>
        <div className="col-12 col-sm-4 col-md-6 col-lg-8  border border-danger">
          <br />
          main
        </div>
      </div>
    </div>
  );
}

export default Responsive;
