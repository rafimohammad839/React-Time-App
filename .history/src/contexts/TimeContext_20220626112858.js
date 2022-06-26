import { createContext } from "react";

const TimeContext = createContext({

});

const TimeProvider = ({ children }) => {
  return (
    <TimeContext.Provider>
      {children}
    </TimeContext.Provider>
  )
}