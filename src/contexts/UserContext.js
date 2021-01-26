import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState("");

  const newUser = (input) => {
    setUser(input);
  };

  return (
    <UserContext.Provider value={{ user, newUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
