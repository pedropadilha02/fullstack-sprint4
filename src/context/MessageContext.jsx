import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export function MessageProvider ({children}) {
    const [messageView, setMessageView] = useState('');

    return (
        <MessageContext.Provider value={{ messageView, setMessageView}}>
            {children}
        </MessageContext.Provider>
    )
}

export const useMessage = () => useContext(MessageContext);