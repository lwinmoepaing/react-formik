import React from "react";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";

const cityOptions = [
  { key: "Select An City", value: "" },
  { key: "Yangon", value: "Yangon" },
  { key: "Mandalay", value: "Mandalay" },
];

const genderOptions = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
  { key: "Other", value: "other" },
];

const programOptions = [
  { key: "Html", value: "html" },
  { key: "Css", value: "css" },
  { key: "Javascript", value: "js" },
];

const FormikContainer = (props) => {
  const initialValues = {
    email: "",
    address: "",
    city: "",
    gender: "",
    programming: [],
    date: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().trim().email("Invalid email").required("Required"),
    address: Yup.string().trim().required("Required"),
    city: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    programming: Yup.array()
      .min(1, "Atleast you need to choose one language")
      .required("Required"),
    date: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values, submitProps) => {
    console.log(submitProps);
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {(formik) => (
          <Form>
            <FormikControl
              label="Email"
              name="email"
              type="email"
              control="input"
            />

            <FormikControl label="Address" name="address" control="textarea" />

            <FormikControl
              label="Select City"
              name="city"
              control="select"
              options={cityOptions}
            />

            <FormikControl
              label="Select Gender"
              name="gender"
              control="radio"
              options={genderOptions}
            />

            <FormikControl
              label="Select Programming"
              name="programming"
              control="checkbox"
              options={programOptions}
            />

            <FormikControl label="Birthdate" name="date" control="date" />

            <button type="submit"> Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikContainer;
