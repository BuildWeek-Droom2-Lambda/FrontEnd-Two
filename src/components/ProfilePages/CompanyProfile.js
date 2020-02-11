import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const CompanyProfilePage = props => {
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
    const LS = localStorage.getItem("userid");
    axios
      .get(`https://droom-node-server.herokuapp.com/api/companies/${LS}`)

      .then(res => {
        console.log(res);
        setCompany(res.data);
      })

      .catch(err => {
        console.log(err);
      });
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

      <Form className={`form ${updateForm ? "hidden" : ""}`}>
        <Field
          className="input"
          name="name"
          type="text"
          value={values.name}
          placeholder="username"
        ></Field>
        {touched.name && errors.name && <p>{errors.name}</p>}

        <Field
          className="input"
          name="location"
          type="text"
          value={values.location}
          placeholder="location"
        ></Field>
        {touched.location && errors.location && <p>{errors.location}</p>}

        <Field
          className="input"
          name="bio"
          type="text"
          value={values.bio}
          placeholder="bio"
        ></Field>
        {touched.bio && errors.bio && <p>{errors.bio}</p>}

        <button className="button" type="submit">
          Update
        </button>
      </Form>
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

  handleSubmit(values, { resetForm, setStatus }) {
    console.log("Company form values", values);

    const LS = localStorage.getItem("userid");
    axiosWithAuth()
      .put(
        `https://droom-node-server.herokuapp.com/api/companies/${LS}`,
        values
      )

      .then(res => {
        console.log(res);
        setStatus(true);
        setStatus(res.data);
        resetForm();
      })

      .catch(err => {
        console.log(err);
      });
  }
});
