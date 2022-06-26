import React from "react";
import Button from "./Button";
import Input from "./Input";

const Timer = () => {
  const handleChange = (e) => {
    console.log(e.target.className);
  };

  const handleClick = (e) => {
    console.log(e.target.className);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Input
          inputOptions={{
            type: "number",
            className: "minute",
            value: {},
            name: {},
            onChange: { handleChange },
          }}
        />
        <Input
          inputOptions={{
            type: "number",
            className: "second",
            value: {},
            name: {},
            onChange: { handleChange },
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
            onClick: { handleClick },
          }}
        />
        <Button
          buttonTitle="Reset"
          buttonOptions={{
            type: "button",
            className: "danger",
            onClick: { handleClick },
          }}
        />
      </form>
    </div>
  );
};

export default Timer;
