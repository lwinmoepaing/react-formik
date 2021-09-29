import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Moe",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("On submit", values);
};

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Required"),
  email: Yup.string().trim().email("Invalid Email format").required("Required"),
  channel: Yup.string().trim().required("Required"),
});

console.log("validatingSchema", validationSchema);

function ValidateWithYupOptimize() {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
  });

  useEffect(() => {
    console.log(formik.errors);
  }, [formik.errors]);

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label> Name </label>
          <input name="name" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name ? (
            <span className="error">{formik.errors.name}</span>
          ) : null}
        </div>

        <div className="form-control">
          <label> Email </label>
          <input name="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <span className="error">{formik.errors.email}</span>
          ) : null}
        </div>

        <div className="form-control">
          <label> Channel </label>
          <input name="channel" {...formik.getFieldProps("channel")} />
          {formik.touched.channel && formik.errors.channel ? (
            <span className="error">{formik.errors.channel}</span>
          ) : null}
        </div>

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default ValidateWithYupOptimize;
