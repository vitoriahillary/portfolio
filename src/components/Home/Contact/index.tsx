'use client'
import { Button } from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/Input/textArea";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleCleanForce(){
        setMessage('')
    }
    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <h1 className="font-bold font-sans text-2xl lg:text-2xl mb-16 lg:ml-10 self-start">Fale comigo</h1>
            <div className="flex flex-col gap-6 justify-start items-center p-5 pb-20 ">
                <div className="flex flex-col gap-5 w-full justify-center items-center lg:max-w-[50%] lg:items-center">
                    <h2> Preencha o formulario para entrar em contato comigo pelo email: {' '} 
                    <span className="font-bold">alarconhvitoria@gmail.com</span>
                    </h2>
                    <Input id="name" label="Name" value={name} onChange={(e:any) => setName(e.target.value)}/>
                    <Input id="email" label="Email" value={email} onChange={(e: any) => setEmail(e.target.value)}/>
                    <TextArea id="message" label="Message" value={message} onChange={(e: any) => setMessage(e.target.value)}/>
                </div>
                <div className="flex w-full gap-5 lg:max-w-[50%] lg:items-center">
                    <Button variant="outline" onClick={handleCleanForce}> Limpar </Button>
                    <Button> Enviar </Button>
                </div>
            </div>
        </div>
    )
}