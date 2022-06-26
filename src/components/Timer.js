import React, { useContext, useEffect } from "react";
import { TimeContext } from "../contexts/TimeContext";
import Button from "./Button";
import Input from "./Input";

const Timer = () => {
  
  const { second, setSecond, minute, setMinute, displayTime, setDisplayTime, startTime, setStartTime } = useContext(TimeContext);

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

  const formatAndSetTime = () => {
    if (second < 60) {
      setDisplayTime({ ...displayTime, min: minute, sec: second });
    } else if (second >= 60) {
      let addToSeconds = second % 60;
      let addToMinutes = parseInt(minute) + Math.trunc(second / 60);
      setDisplayTime({ ...displayTime, min: addToMinutes, sec: addToSeconds });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formatAndSetTime();
    setStartTime(true);
  };

  const handleClick = (e) => {
    if (e.target.className === "secondary") {
      setStartTime(!startTime);
    } else if (e.target.className === "danger") {
      formatAndSetTime();
      setStartTime(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Input
          inputOptions={{
            type: "number",
            className: "minute",
            value: minute,
            onChange: handleChange,
          }}
        />
        <Input
          inputOptions={{
            type: "number",
            className: "second",
            value: second,
            onChange: handleChange,
          }}
        />
        
        <Button type="submit" buttonTitle="Start" className="primary" />
        <Button
          type="button"
          buttonTitle="Pause/Resume"
          onClick={handleClick}
          className="secondary"
        />
        <Button
          type="button"
          buttonTitle="Reset"
          onClick={handleClick}
          className="danger"
        />
      </form>
      <p className="text-center display-time">
        {displayTime.min.toString().length <= 1 ? "0" : ""}
        {displayTime.min}:{displayTime.sec.toString().length <= 1 ? "0" : ""}
        {displayTime.sec}
      </p>
    </div>
  );
};

export default Timer;
