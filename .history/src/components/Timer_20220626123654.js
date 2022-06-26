import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [startTime, setStartTime] = useState(false);

  const [displayTime, setDisplayTime] = useState({min: '', sec: ''})

  const handleChange = (e) => {
    if (e.target.value < 0) return;
    if (e.target.className === 'minute') {
      setMinute(e.target.value);
    } else if (e.target.className === 'second') {
      setSecond(e.target.value);
    }
  }

  useEffect(() => {
    console.log(displayTime.sec.length);
    let id
    if (startTime) {
      id = setInterval(() => {
        setDisplayTime({ ...displayTime, sec: displayTime.sec - 1 });
      }, 1000)
    }
    return () => {
      clearInterval(id);
    }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayTime])
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayTime({ ...displayTime, min: minute, sec: second });
    setStartTime(true);
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
      <p className="text-center">
        {(!dipslayTime.min.length || displayTime.min.length <= 1) ? "0": ""}{displayTime.min}:{displayTime.sec.length <= 1 ? '0': ''}{displayTime.sec}
      </p>
    </div>
  );
};

export default Timer;
