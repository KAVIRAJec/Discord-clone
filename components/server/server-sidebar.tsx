import { ChannelType,MemberRole } from "@prisma/client"
import { redirect } from "next/navigation"
import { Hash,Mic,ShieldAlert,ShieldCheck,Video } from "lucide-react"

import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Separator } from "@/components/ui/separator"
import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"

import { ServerHeader } from "./server-header"

interface ServerSidebarProps {
    serverId: string;
}

export const ServerSidebar = async({
    serverId
}: ServerSidebarProps) => {
    const profile = await currentProfile();

    if(!profile){
        return redirect("/");
    }

    const server = await db.server.findUnique({
        where: {
            id: serverId,
        },
        include: {
            channels: {
                orderBy: {
                    createdAt: "asc",
                }
            },
            members: {
                include: {
                    profile: true,
                },
                orderBy: {
                    role: "asc",
                }
            }
        }
    });

    const textChannels = server?.channels.filter((channel) => channel.type===ChannelType.TEXT)
    const audioChannels = server?.channels.filter((channel) => channel.type===ChannelType.AUDIO)
    const videoChannels = server?.channels.filter((channel) => channel.type===ChannelType.VIDEO)
    const member = server?.members.filter((member) => member.profileId!== profile.id)

    if(!server){
        return redirect("/");
    }

    const role = server.members.find((member) => member.profileId === profile.id)?.role

    return (
        <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
            <ServerHeader
            server={server}
            role={role} 
            />
            <ScrollArea className="flex-1 px-3">
                <div className="mt-2">
                    
                </div>
                <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
            </ScrollArea>
        </div>
    )
}