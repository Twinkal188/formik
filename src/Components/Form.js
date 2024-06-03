import React from "react";
import { useFormik } from "formik";

import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      radio: "",
      mbno: "",
      Country: "",
      City: "",
      Address: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="text-center layout">
      <div className="lay">
        <h1 className="head ">Registration Form</h1>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="box1">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>

        <div className="box1">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>

        <div className="box1">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className="box1">
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        <div className="box1">
          <div id="my-radio-group">Gender : </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <input
                type="radio"
                name="Gender"
                value="male"
                onChange={formik.handleChange}
              />
              male
            </label>
            <label>
              <input
                type="radio"
                name="Gender"
                value="female"
                onChange={formik.handleChange}
              />
              female
            </label>
          </div>
        </div>

        <div className="box1">
          <label htmlFor="mbno">Mobile No :</label>
          <input
            id="mbno"
            name="mbno"
            type="mbno"
            onChange={formik.handleChange}
            value={formik.values.mbno}
          />
        </div>

        <div className="box1">
          <div id="my-radio-group">language: </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <input
                type="checkbox"
                name="language"
                value="Gujarati"
                onChange={formik.handleChange}
              />
            Gujarati
            </label>
            <label>
              <input
                type="checkbox"
                name="language"
                value="Hindi"
                onChange={formik.handleChange}
              />
              Hindi
            </label>

            <label>
              <input
                type="checkbox"
                name="language"
                value="English"
                onChange={formik.handleChange}
              />
              English
            </label>

            <label>
              <input
                type="checkbox"
                name="language"
                value="French"
                onChange={formik.handleChange}
              />
              French
            </label>
          </div>
        </div>


        <div className="box1">
          <label htmlFor="country">Country</label>
          <input
            id="Country"
            name="Country"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Country}
          />
        </div>

        <div className="box1">
          <label htmlFor="City">City</label>
          <input
            id="City"
            name="City"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.City}
          />
        </div>

        <div className="box1">
          <label htmlFor="Address">Address</label>
          <input
            id="Address"
            name="Address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Address}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
