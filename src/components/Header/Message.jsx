import React, { useRef, useState } from 'react'
import { useMessage } from '../../context/MessageContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function MessageAlert() {
    
    const notify = () => toast.error(messageView);
    const { messageView, setMessageView } = useMessage();
    const time = useRef();
    
    time.current = setTimeout(() => {
        setMessageView()
    }, 2000);

    if(!messageView){
        return <div></div>
    }

    return (
        <h1 className="alert">Erro ao carregar...</h1>
    )
    
}