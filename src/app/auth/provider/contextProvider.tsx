import { createContext, useState } from "react";

interface ContextAuthIntrerface {
  isAuthenticated: boolean; 
  setAuth: (auth: boolean) => void; 
};

const ContextAuth = createContext<ContextAuthIntrerface>({
  isAuthenticated: false,
  setAuth: () => { },
});

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setAuth] = useState<boolean>(false);
  
  return (
    <ContextAuth.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </ContextAuth.Provider>
  );
};

export default ContextAuth;