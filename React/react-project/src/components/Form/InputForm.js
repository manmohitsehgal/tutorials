import React, { useState } from "react";
import { Color } from "./Colors";

export const InputForm = () => {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [color, setColor] = useState(null);

  const handleFormValue = e => {
    const { target } = e;
    console.log(target);
    if (target.name === "userName") {
      setName(target.value);
    }
    if (target.name === "userAge") {
      setAge(target.value);
    }
    if (target.name === "userColor") {
      setColor(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        name="userName"
        onChange={handleFormValue}
      />
      <input
        type="text"
        placeholder="Enter Age"
        name="userAge"
        onChange={handleFormValue}
      />
      <input
        type="text"
        placeholder="Enter Color"
        name="userColor"
        onChange={handleFormValue}
      />
      <button type="button" onClick={handleSubmit}>
        Color Changes
      </button>
      {name === "Mani" ? (
        <Color color={color} name={name} />
      ) : (
        <Color color={color} />
      )}
    </div>
  );
};
