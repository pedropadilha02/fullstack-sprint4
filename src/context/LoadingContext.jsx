import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();


export function LoadingProvider({children}) {
    const [loadingView, setLoadingView] = useState('');

    return(
        <LoadingContext.Provider value={{loadingView, setLoadingView}}>
            {children}
        </LoadingContext.Provider>

    );
}

export const useLoading = () => useContext(LoadingContext);