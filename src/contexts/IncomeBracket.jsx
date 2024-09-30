import React, { createContext, useContext, useState } from "react";

export const IncomeBracketContext = createContext()

const IncomeBracket = ({children}) => {

    const [bracket, setBracket] = useState({})

    return(
        <IncomeBracketContext.Provider value={{bracket, setBracket}}>
            {children}
        </IncomeBracketContext.Provider>
    )
}

export default IncomeBracket;

