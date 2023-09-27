import { createContext, ReactNode, useContext, useState } from "react";

interface LoadingContextData{
    isLoading: boolean;
    toggleLoading: (value: boolean) => void
}

interface LoadingContextProviderProps{
    children: ReactNode;
}

const LoadingContext = createContext({} as LoadingContextData)

export function LoadingProvider({children} : LoadingContextProviderProps){
    const [isLoading, setIsLoading] = useState(false)

    function toggleLoading(value : boolean){
        setIsLoading(value)
    }
    return(
        <LoadingContext.Provider value={{isLoading, toggleLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}

export function useLoading(){
    const context = useContext(LoadingContext);
    return context
}