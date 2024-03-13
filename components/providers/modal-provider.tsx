"use client";

import { CreateServerModal } from "../modals/create-server-modal";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMoundted,setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMoundted){
        return null;
    }

    return (
        <>
            <CreateServerModal />
        </>
    )
}