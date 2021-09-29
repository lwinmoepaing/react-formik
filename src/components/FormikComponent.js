import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
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

function FormikComponent() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="container">
        <Form>
          <div className="form-control">
            <label> Name </label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" className="error" />
          </div>

          <div className="form-control">
            <label> Email </label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="span" className="error" />
          </div>

          <div className="form-control">
            <label> Channel </label>
            <Field type="text" name="channel" />
            <ErrorMessage name="channel" component="span" className="error" />
          </div>

          <button type="submit"> Submit </button>
        </Form>
      </div>
    </Formik>
  );
}

export default FormikComponent;
