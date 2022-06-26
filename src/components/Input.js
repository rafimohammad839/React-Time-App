import React from "react";

const Input = ({ label, inputOptions }) => {
  return (
    <>
      {label && (
        <label>{label}</label>
      )}
      <input {...inputOptions} />
    </>
  );
};

export default Input;
