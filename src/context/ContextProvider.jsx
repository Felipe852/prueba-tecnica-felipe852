import React, { createContext, useState } from "react";


const Context = createContext();

function ContextProvider({ children }) {

    const [img, setImg] =useState();
    const [name, setName] =useState();
  
    const data = {
      img, 
      setImg,
      name, 
      setName
    };
  
    return <Context.Provider value={data}>{children}</Context.Provider>;
};

export { ContextProvider, Context };