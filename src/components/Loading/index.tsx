'use client'

import { useLoading } from "@/Context/LoadingContext"
import { Loader } from "lucide-react";

export function Loading(){
    const { isLoading } = useLoading();
    if(isLoading){
        return(
            <div className="fixed inset-0 z-50 flex items-center justify-center p-1 rounded-lg bg-gray-200 cursor-pointer opacity-50">
                <Loader className="animate-spin text-pink-700 text-9xl"/>
            </div>
        )
    }
    return(
        <div className="hidden"/>
    )
}