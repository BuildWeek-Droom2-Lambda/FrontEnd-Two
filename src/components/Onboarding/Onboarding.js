import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';

const Onboarding = ({ errors, touched, values, status }) => {
    const [user, setUser] = useState({
        name: "",
        password: "",
        type: ""
    });

    console.log(user); 

    useEffect(() => {
        status && setUser(status);
    }, [status])

    return (
        <div className="onboarding">
            <h1>Droom</h1>
            <h2>Find Your Droom Job!</h2>
            <Form>
                <Field name="name" type="text" value={values.name} placeholder="username" ></Field>
                {touched.name && errors.name && <p>{errors.name}</p>}

                <Field name="password" type="text" value={values.password} placeholder="password" ></Field>
                {touched.password && errors.password && <p>{errors.password}</p>}

                <Field name="type" component="select" value={values.type} >
                    <option id="placeholder">Register As</option>
                    <option>seeker</option>
                    <option>company</option>
                </Field>
                {touched.type && errors.type && <p>{errors.type}</p>}

                <button type="submit">Register</button>
            </Form>
        </div>
    )
}

const FormikOnboarding = withFormik({
    mapPropsToValues() {
        return {
            name: "",
            password: "",
            type: ""
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Username is required"),
        password: Yup.string().required("Password required"),
        type: Yup.string().oneOf(["company", "seeker"]).required("User type is required")
    }),

    handleSubmit(values, { resetForm, setStatus }) {
        console.log("Form Values ", values);

        axios
            .post("https://droom-node-server.herokuapp.com/api/register", values) 

            .then(res => {
                console.log(res.data);
                resetForm();
                setStatus(res.data);
            })
    }
})(Onboarding);

export default FormikOnboarding;