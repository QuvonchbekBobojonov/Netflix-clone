"use client";

import { createContext, useState, useContext } from "react";

import { ContextType, ChildProps, AccountProps } from "@/types";


export const Context = createContext<ContextType | null>(null)


function GlobalContext({children}: ChildProps) {
    const [account, setAccount] = useState<AccountProps|null>(null)
    return (
        <Context.Provider value={{account, setAccount}}>
            {children}
        </Context.Provider>
    );
}

export default GlobalContext;


export const useGlobalContext = () => {
    const context = useContext(Context)
    if (context === null) {
        throw new Error("useGlobalContext must be used within a GlobalContext");
    }
    return context
}