import { ErrorMessage, Field } from "formik";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import TextError from "./TextError";

export default function Checkbox(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((item) => (
            <Fragment key={item.key}>
              <input
                type="checkbox"
                id={item.key}
                {...field}
                value={item.value}
              />
              <label className="inline" htmlFor={item.key}>
                {item.key}
              </label>
            </Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />

    </div>
  );
}
