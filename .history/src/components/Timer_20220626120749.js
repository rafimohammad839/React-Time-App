import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Timer = () => {
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const handleChange = (e) => {
    console.log('changed')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked on submit");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Input type="number" className="minute" value={minute} onChange={handleChange} />
        <Input type="number" className="second" value={second} onChange={handleChange} />
        <Button type="submit" buttonTitle="Start" />
        <Button type="button" buttonTitle="Pause/Resume" />
        <Button type="button" buttonTitle="Reset" />
      </form>
    </div>
  );
};

export default Timer;
