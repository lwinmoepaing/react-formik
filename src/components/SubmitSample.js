import React from "react";
import { useFormik } from "formik";

function SubmitSample() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("On submit", values);
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
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

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default SubmitSample;
