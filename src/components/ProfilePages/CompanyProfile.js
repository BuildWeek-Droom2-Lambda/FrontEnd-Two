import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { withFormik } from "formik";
import * as Yup from "yup";

import { connect } from "react-redux";
import { getCompanyById, updateCompany } from "../../Redux/actions/companies";

const CompanyProfilePage = ({ values, touched, errors, status, ...props }) => {
  const [company, setCompany] = useState({
    name: "",
    pasword: "",
    location: "",
    bio: ""
  });

  const [updateForm, setUpdateForm] = useState(null);

  useEffect(() => {
    status && setUpdateForm(status);
  }, [status]);

  useEffect(() => {
    status && setCompany(status);
  }, [status]);

  useEffect(() => {
    const ID = localStorage.getItem("ID");
    props.getCompanyById(ID);
  }, []);

  return (
    <div className="company-profile-container">
      <nav>
        <h3>Droom</h3>
        <div>
          <Link to="/companyprofilepage">Profile</Link>
          <Link to="/companymatchespage">Matches</Link>
          <Link to="/companymainui">Home</Link>
        </div>
      </nav>

      <div className="company-profile">
        <h1>Your Profile</h1>

        <div className="company-profile-info">
          <h2>Username: {company.name}</h2>
          <h2>Location: {company.location}</h2>
          <h2>Bio: {company.bio}</h2>
        </div>
      </div>

      <button
        className={`update-btn ${!updateForm ? "hidden" : ""}`}
        onClick={() => setUpdateForm(!updateForm)}
      >
        Update Profile
      </button>

      <form className={`form ${updateForm ? "hidden" : ""}`}>
        <input
          className="input"
          name="name"
          type="text"
          value={values.name}
          placeholder="username"
        ></input>
        {touched.name && errors.name && <p>{errors.name}</p>}

        <input
          className="input"
          name="location"
          type="text"
          value={values.location}
          placeholder="location"
        ></input>
        {touched.location && errors.location && <p>{errors.location}</p>}

        <input
          className="input"
          name="bio"
          type="text"
          value={values.bio}
          placeholder="bio"
        ></input>
        {touched.bio && errors.bio && <p>{errors.bio}</p>}

        <button className="button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

const FormikCompanyProfilePage = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      location: "",
      bio: ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    location: Yup.string().required("Location is required"),
    bio: Yup.string().required("Bio is required")
  }),

  handleSubmit(values) {
    console.log("Company form values", values);

    const ID = localStorage.getItem("userid");
    updateCompany(ID, values);
  },

  displayName: "CompanyProfilePage"
})(CompanyProfilePage);

export default connect(null, { getCompanyById, updateCompany })(
  FormikCompanyProfilePage
);
