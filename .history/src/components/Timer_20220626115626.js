import React from "react";
import Button from "./Button";
import Input from "./Input";

const Timer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked on submit");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Input />
        <Input />
        <Button />
        <Button />
        <Button />
      </form>
    </div>
  );
};

export default Timer;
