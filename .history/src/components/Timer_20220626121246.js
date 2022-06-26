import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const [displayTime, setDisplayTime] = useState({min: '', sec: ''})

  const handleChange = (e) => {
    if (e.target.className === 'minute') {
      setMinute(e.target.value);
    } else if (e.target.className === 'second') {
      setSecond(e.target.value);
    }
  }

  // useEffect(() => {
  //   console.log(minute, second);
  // }, [minute, second])
  
  console.log("Display Time is", displayTime);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayTime({ ...displayTime, min: minute, sec: second });
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
