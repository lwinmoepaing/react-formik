import { useFormik } from "formik";
import React, { useEffect } from "react";

function SampleForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  return (
    <div>
      <form>
        <div className="form-control">
          <label> Name </label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>

        <div className="form-control">
          <label> Email </label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        <div className="form-control">
          <label> Channel </label>
          <input
            name="channel"
            value={formik.values.channel}
            onChange={formik.handleChange}
          />
        </div>

        <p> Value: {formik.values.name}</p>
      </form>
    </div>
  );
}

export default SampleForm;
