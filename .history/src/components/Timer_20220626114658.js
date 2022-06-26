import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.className);
  };

  const handleClick = () => {
    console.log('Clicked')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked on submit')
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Input
          inputOptions={{
            type: "number",
            className: "minute",
            value: {minute},
            name: "minute",
            onChange: handleChange,
          }}
        />
        <Input
          inputOptions={{
            type: "number",
            className: "second",
            value: {second},
            name: "minute",
            onChange: handleChange,
          }}
        />
        <Button
          buttonTitle="Start"
          buttonOptions={{
            type: "submit",
            className: "primary",
          }}
        />
        <Button
          buttonTitle="Pause/Resume"
          buttonOptions={{
            type: "button",
            className: "secondary",
            onClick: handleClick,
          }}
        />
        <Button
          buttonTitle="Reset"
          buttonOptions={{
            type: "button",
            className: "danger",
            onClick: handleClick,
          }}
        />
      </form>
    </div>
  );
};

export default Timer;
