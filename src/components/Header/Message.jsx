import React, { useRef, useState } from 'react'
import { useMessage } from '../../context/MessageContext';

export function MessageAlert() {
    
    const { messageView, setMessageView } = useMessage();
    const time = useRef();
    
    time.current = setTimeout(() => {
        setMessageView()
    }, 2000);

    if(!messageView){
        return <div></div>
    }

    return (
        <h1 className="alert">{messageView}</h1>
    )
    
}