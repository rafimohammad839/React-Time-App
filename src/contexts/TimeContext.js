import { useState, createContext } from "react";

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [startTime, setStartTime] = useState(false);
  const [displayTime, setDisplayTime] = useState({ min: "00", sec: "00" });

  const value = {
    minute,
    setMinute,
    second,
    setSecond,
    displayTime,
    setDisplayTime,
    startTime,
    setStartTime
  }

  return (
    <TimeContext.Provider value={value}>
      {children}
    </TimeContext.Provider>
  )
}

