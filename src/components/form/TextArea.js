import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

export default function TextArea(props) {
  const { name, label, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        as="textarea"
        name={name}
        label={label}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
