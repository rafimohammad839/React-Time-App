import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [startTime, setStartTime] = useState(false);

  const [displayTime, setDisplayTime] = useState({ min: '00', sec: '00' });

  const handleChange = (e) => {
    if (e.target.value < 0) return;
    if (e.target.className === "minute") {
      setMinute(e.target.value);
    } else if (e.target.className === "second") {
      setSecond(e.target.value);
    }
  };

  useEffect(() => {
    if (startTime) {
      if (displayTime.sec > 0) {
        let id = setInterval(() => {
          setDisplayTime({ ...displayTime, sec: displayTime.sec - 1 });
        }, 1000);
        return () => {
          clearInterval(id);
        };
      } else if (displayTime.min > 0) {
        setTimeout(() => {
          setDisplayTime({ ...displayTime, min: displayTime.min - 1, sec: 59 });
        }, 1000);
      } else {
        setStartTime(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayTime, startTime]);

  useEffect(() => {
    // console.log(displayTime.sec.length);
  }, [startTime, displayTime]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (second < 60) {
      setDisplayTime({ ...displayTime, min: minute, sec: second });
    }
    setStartTime(true);
  };

  const handleClick = (e) => {
    if (e.target.className === "secondary") {
      setStartTime(!startTime);
    } else if (e.target.className === "danger") {
      setDisplayTime({ ...displayTime, min: minute, sec: second })
      setStartTime(true);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          className="minute"
          value={minute}
          onChange={handleChange}
        />
        <Input
          type="number"
          className="second"
          value={second}
          onChange={handleChange}
        />
        <Button type="submit" buttonTitle="Start" className="primary" />
        <Button type="button" buttonTitle="Pause/Resume" onClick={handleClick} className="secondary" />
        <Button type="button" buttonTitle="Reset" onClick={handleClick} className="danger" />
      </form>
      {/* <p className="text-center">
        {!displayTime.min.length || displayTime.min.length <= 1 ? "0" : ""}
        {displayTime.min}:
        {!displayTime.sec.length || displayTime.sec.length <= 1 ? "0" : ""}
        {displayTime.sec}
      </p> */}
      <p className="text-center">
        {displayTime.min}:{displayTime.sec}
      </p>
    </div>
  );
};

export default Timer;
