'use client'
import { useRouter } from "next/navigation";
import { Tabs } from "./Tabs";
import * as Collapsible from '@radix-ui/react-collapsible'
import { Menu, X } from 'lucide-react'
import { useState } from "react";
import { Button } from "../Button";

export function Navbar(){
    const router = useRouter()
    const [isNavBarOpen, setisNavBarOpen] = useState(false)
    return(
        <div className="fixed w-full z-50 bg-pink-400 flex h-20 px-4 lg:px-12 py-2 shadow-lg">
            <img src="https://i.pinimg.com/736x/98/7d/2c/987d2c28642e2bd96d577603511e1486.jpg" alt="logo" className="rounded-full h-12 w-12 cursor-pointer" onClick={()=> router.push('/')}/>
            <div className="flex lg:hidden ml-auto items-center">
                <Collapsible.Root className='z-20' onOpenChange={setisNavBarOpen}>
                <Collapsible.Trigger asChild>
                    <Button variant="ghost">
                    {(!isNavBarOpen) ? <Menu/> : <X />}
                    </Button>                        
                </Collapsible.Trigger>
                <Collapsible.Content forceMount asChild className='fixed top-16 right-1 px-10 shadow-lg border border-zinc-200 data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade data-[state=open]:animate-slideDownAndFade'>
                    <div className="flex flex-1 flex-col gap-6 bg-pink-50 h-[90%] w-80">
                        <Tabs/>
                    </div>
                </Collapsible.Content>
                </Collapsible.Root>
            </div>
            <div className="hidden lg:flex ml-auto">
                <Tabs/>
            </div>
        </div>
    )
}