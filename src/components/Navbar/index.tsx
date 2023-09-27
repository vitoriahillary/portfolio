'use client'
import { useRouter } from "next/navigation";
import { Tabs } from "./Tabs";
import * as Collapsible from '@radix-ui/react-collapsible'
import { Menu, X } from 'lucide-react'
import { useState } from "react";
import { Button } from "../Button";

export function Navbar() {
    const router = useRouter()
    const [isNavBarOpen, setisNavBarOpen] = useState(false)
    return (
        <div className="fixed w-full z-50 bg-pink-200 flex h-20 px-4 lg:px-12 py-2 shadow-lg">
            <img src="logo.png" alt="logo" className="w-14 h-14 mt-1 rounded-full cursor-pointer" onClick={() => router.push('/')} />
            <div className="flex lg:hidden ml-auto items-center">
                <Collapsible.Root className='z-20' onOpenChange={setisNavBarOpen}>
                    <Collapsible.Trigger asChild>
                        <Button variant="ghost" className="z-50">
                            {(!isNavBarOpen) ? <Menu /> : <X />}
                        </Button>
                    </Collapsible.Trigger>
                    <Collapsible.Content forceMount asChild className='absolute top-0 right-0 pl-10 shadow-lg border border-zinc-200 data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade data-[state=open]:animate-slideDownAndFade'>
                        <div className="flex flex-1 flex-col bg-pink-50 h-screen w-80">
                            <Collapsible.Trigger asChild>
                                <Button variant="ghost" className="w-12 ml-auto mt-4 mr-4">
                                    {(!isNavBarOpen) ? <Menu /> : <X />}
                                </Button>
                            </Collapsible.Trigger>
                            <Tabs />
                        </div>
                    </Collapsible.Content>
                </Collapsible.Root>
            </div>
            <div className="hidden lg:flex ml-auto">
                <Tabs />
            </div>
        </div>
    )
}