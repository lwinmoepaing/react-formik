import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

export default function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}> {label} </label>
      <Field name={name} id={name} as="select" {...rest}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>{item.key}</option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
