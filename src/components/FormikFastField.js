import React from "react";
import { ErrorMessage, FastField, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Moe",
  email: "",
  channel: "",
  address: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("On submit", values);
};

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Required"),
  email: Yup.string().trim().email("Invalid Email format").required("Required"),
  channel: Yup.string().trim().required("Required"),
});

function FormikFastField() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="container">
        <Form>
          <div className="form-control">
            <label htmlFor="name"> Name </label>
            <Field id="name" type="text" name="name" />
            <ErrorMessage name="name" component="span" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="email"> Email </label>
            <Field id="email" type="text" name="email" />
            <ErrorMessage name="email" component="span" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="channel"> Channel </label>
            <Field
              id="channel"
              type="text"
              name="channel"
              placeholder="Youtube Channel "
            />
            <ErrorMessage name="channel" component="span" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field id="comments" name="comments" component="textarea" />
          </div>

          <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field name="address">
              {(props) => {
                return <input type="text" {...props.field} />;
              }}
            </Field>
          </div>

          <div className="form-control">
            <label htmlFor="facebook">Facebook</label>
            <Field id="facebook" name="social.facebook" />
          </div>

          <div className="form-control">
            <label htmlFor="twitter">Twitter</label>
            <Field id="twitter" name="social.twitter" />
          </div>

          <div className="form-control">
            <label htmlFor="primaryPh">Primary Phone</label>
            <Field id="primaryPh" name="phoneNumbers[0]" />
          </div>

          <div className="form-control">
            <label htmlFor="secondaryPh">Secondary Phone</label>
            <Field id="secondaryPh" name="phoneNumbers[1]" />
          </div>

          <div className="form-control">
            <label htmlFor="phNumbers">Dynamic Phone</label>
            <FieldArray name="phNumbers">
              {({ form, push, remove }) => (
                <>
                  {form.values.phNumbers.map((data, index) => {
                    return (
                      <div key={index}>
                        <FastField name={`phNumbers[${index}]`} className="ph" />
                        <button
                          type="button"
                          className={`plus ${index === 0 && 'large'}`}
                          onClick={() => push("")}
                        >
                          +
                        </button>
                        {index > 0 && (
                          <button
                            type="button"
                            className="minus"
                            onClick={() => remove(index)}
                          >
                            -
                          </button>
                        )}
                      </div>
                    );
                  })}
                </>
              )}
            </FieldArray>
          </div>

          <button type="submit"> Submit </button>
        </Form>
      </div>
    </Formik>
  );
}

export default FormikFastField;
