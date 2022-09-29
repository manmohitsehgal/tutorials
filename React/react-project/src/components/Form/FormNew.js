import React from "react";
import useForm from "react-hook-form";

export default function FormNew() {
  const { register, handleFormData } = useForm();

  const submitFormData = formData => {
    console.log(formData);
  };

  return (
    <form submitFormData={handleFormData(submitFormData)}>
      <input
        type="text"
        placeholder="Enter Name"
        name="userName"
        ref={register}
      />
      <input
        type="text"
        placeholder="Enter Age"
        name="userAge"
        ref={register}
      />
      <input
        type="text"
        placeholder="Enter Color"
        name="userColor"
        ref={register}
      />
    </form>
  );
}
