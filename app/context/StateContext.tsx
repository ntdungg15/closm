import React, { createContext, useContext, useState } from "react";

const StateContext = createContext<any>(null);
export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoginning, setLoginning] = useState(false);
  return (
    <StateContext.Provider value={{ isLoginning, setLoginning }}>
      {children}
    </StateContext.Provider>
  );
};
export const useAppState = useContext(StateContext)
