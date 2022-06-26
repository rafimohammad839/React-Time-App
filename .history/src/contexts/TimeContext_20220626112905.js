import { createContext } from "react";

export const TimeContext = createContext({

});

export const TimeProvider = ({ children }) => {
  return (
    <TimeContext.Provider>
      {children}
    </TimeContext.Provider>
  )
}
