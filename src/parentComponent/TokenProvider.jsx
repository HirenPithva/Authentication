import React, { useMemo, useState } from 'react'
import { createContext } from 'react'




export const TokenContext = createContext();

const TokenProvider = ({children}) =>{
    const [token, setTokenState] = useState('');


    const customTokenHandler = (data) =>{
        console.log("Token set succesfully");
        setTokenState(data);
    }

    const data = {
        token: token,
        setToken: (data)=>{
            customTokenHandler(data);
        }
    }

    return (
        <TokenContext.Provider value={data}>
            {children}
        </TokenContext.Provider>
    );
}

export default TokenProvider;