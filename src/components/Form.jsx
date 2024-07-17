import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

const Form = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema:signUpSchema,
         onSubmit: (values) => {
          console.log(
            "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
            values
          );
         },
      });
 
  
  return (
    <>
      <div className="flex   flex-wrap-reverse justify-center mx-auto px-5  md:px-24 mb-5   bg-[#1f2937]">
        <div className="form w-full md:w-1/2 pt-6 pb-5 md:pb-0 text-white">
          <form onSubmit={handleSubmit}  >
            <div className="flex flex-col gap-2 py-2">
              <label className="px-3" htmlFor="">Name</label>
              <input
                className="w-full border-b py-2 border-white bg-transparent px-3"
                type="text"
                id="name "
                placeholder="Enter Name Here"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {errors.name && touched.name ? (
                      <p className="text-red-600 text-xs">{errors.name}</p>
                    ) : null}
            </div>
            <div className="flex flex-col gap-2 bg-transparent py-2">
              <label className="px-3" htmlFor="">E-mail</label>
              <input
                className="w-full border-b border-white py-2 bg-transparent px-3"
                type="email"
                id="email "
                placeholder="Enter E-Mail Here"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {errors.name && touched.name ? (
                      <p className="text-red-600 text-xs">{errors.email}</p>
                    ) : null}
            </div>
            <div className="flex flex-col gap-2   py-2">
              <label className="px-3" htmlFor="">Password</label>
              <input
                className="w-full border-b border-white py-2 bg-transparent px-3"
                type="password"
                id="password "
                placeholder="Enter Password Here"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {errors.name && touched.name ? (
                      <p className="text-red-600 text-xs">{errors.password}</p>
                    ) : null}
            </div>
            <div className="flex flex-col gap-2  py-2">
              <label className="px-3" htmlFor="">Confirm Password</label>
              <input
                className="w-full border-b py-2 border-white bg-transparent px-3"
                type="password"
                id="confirm_password "
                placeholder="Enter Password Here"
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {errors.name && touched.name ? (
                      <p className="text-red-600 text-xs">{errors.confirm_password}</p>
                    ) : null}
            </div>
            <button type="submit" className="mt-5  px-5 bg-black text-white hover:bg-red-600    hover:text-white font-bold uppercase py-2">Participate</button>
          </form>
        </div>
        <div className="md:w-1/2 w-full   ">
          <div className=" bg-footer bg-center  h-[90vh] bg-cover text-center font-bold py-4 "><h1>Join our Community</h1></div>
        </div>
      </div>
    </>
  );
};

export default Form;
