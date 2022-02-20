import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <GlobalContext.Provider
      value={{
        user: user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
