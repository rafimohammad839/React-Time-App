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
        <Input type="number" />
        <Input type="number" />
        <Button type="submit" buttonTitle="Start" />
        <Button type="button" buttonTitle="Pause/Resume" />
        <Button type="button" buttonTitle="Reset" />
      </form>
    </div>
  );
};

export default Timer;
