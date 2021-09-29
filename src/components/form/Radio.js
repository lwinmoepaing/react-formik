import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";
import TextError from "./TextError";

export default function Radio(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}> {label} </label>
      <Field id={name} name={name} {...rest}>
        {({field}) => {

          return options.map((item) => (
            <Fragment key={item.key}>
              <input
                type="radio"
                id={item.value}
                {...field}
                value={item.value}
                checked={field.value === item.value}
              />
              <label className="inline" htmlFor={item.value}>{item.key}</label>
            </Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
