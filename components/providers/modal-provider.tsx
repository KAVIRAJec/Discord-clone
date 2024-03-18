"use client";

import { useEffect, useState } from "react";

import { InviteModal } from "@/components/modals/invite-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";

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
            <InviteModal />
            <EditServerModal />
        </>
    )
}