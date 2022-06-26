import { createContext } from "react";

const TimeContext = createContext({
  
});

export const TimeProvider = ({ children }) => {
  return (
    <TimeContext.Provider value={{}}>
      {children}
    </TimeContext.Provider>
  )
}

