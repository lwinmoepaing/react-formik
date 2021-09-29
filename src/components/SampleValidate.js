import React, { useEffect } from "react";
import { useFormik } from "formik";
import "./App.css";

const initialValues = {
  name: "Moe",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("On submit", values);
};

const validate = (values) => {
  let errors = {};
  // values.name, values.email, values.channel
  // errors.name, errors.email, errors.channel
  // errors.name = 'This field is required'
  if (!values.name.trim()) {
    errors.name = "Required";
  }

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!values.email.trim()) {
    errors.email = "Required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.channel.trim()) {
    errors.channel = "Required";
  }

  return errors;
};

function SampleValidate() {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate,
  });

  useEffect(() => {
    console.log(formik.errors);
  }, [formik.errors]);

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label> Name </label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name ? (
            <span className="error">{formik.errors.name}</span>
          ) : null}
        </div>

        <div className="form-control">
          <label> Email </label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <span className="error">{formik.errors.email}</span>
          ) : null}
        </div>

        <div className="form-control">
          <label> Channel </label>
          <input
            name="channel"
            value={formik.values.channel}
            onChange={formik.handleChange}
          />
          {formik.errors.channel ? (
            <span className="error">{formik.errors.channel}</span>
          ) : null}
        </div>

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default SampleValidate;
