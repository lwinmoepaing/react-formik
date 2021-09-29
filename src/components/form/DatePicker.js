import React from "react";
import { ErrorMessage, Field } from "formik";
import DateView from "react-datepicker";
import TextError from "./TextError";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <Field name={name}>
        {(fieldProps) => {
          const { form, field } = fieldProps;
          const { value } = field;
          const { setFieldValue } = form;

          return (
            <DateView
              id={name}
              {...rest}
              {...field}
              onChange={(onChValue) => setFieldValue(name, onChValue)}
              selected={value}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;
