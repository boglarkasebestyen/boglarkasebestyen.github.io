import React from "react";
import { useFormik } from "formik";
import "./index.css"

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      alert("Login successful!");
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = "Field required.";
      } 

      //validating email format with regex
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!emailFormat.test(values.email)) {
        errors.email = "Username should be an email.";
      }

      if (!values.password) {
        errors.password = "Field required.";
      }
      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/*email*/}
      <div id="email-cont">
        <p>Email:</p>
      </div>
      <div id="inp-cont">
        <input
          id="emailField"
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        {/*email error*/}
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "#e35947", fontSize: "16px", fontWeight: "bold" }}>
            {formik.errors.email}
          </div>
        ) : null}
        </div>

        <br/>

        {/*password*/}
        <div id="passw-cont">
          <p>Password:</p>
        </div>
        <div id="inp-cont">
          <input
            id="pswField"
            type="text"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

        {/*password error*/}
        {formik.errors.password ? (
          <div id="error">
            <div id="pswError" style={{ color: "#e35947", fontSize: "16px", fontWeight: "bold"}}>
            {formik.errors.password}
            </div>
          </div>
        ) : null}
        </div>

        
        {/*submit buttonr*/}
        <div id="button-container">
          <button id="submitBtn" type="submit">Submit</button>
        </div>
      </form>
  );
}

export default App;
