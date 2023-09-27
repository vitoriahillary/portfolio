'use client'
import { Button } from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/Input/textArea";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { useLoading } from "@/Context/LoadingContext";

export function ContactContent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleCleanForce() {
        setMessage('')
    }

    const form: any = useRef()

    const { toggleLoading } = useLoading()

    const handleSendEmail = (e: any) => {
        e.preventDefault()

        if(!name){
            return toast.error('Nome vazio')
        }
        if(!email){
            return toast.error('Email vazio')
        }
        if(!message){
            return toast.error('Mensagem vazio')
        }

        toggleLoading(true)
        emailjs.sendForm('service_1ten91d', 'template_uphj97s', form.current!, 'OWnrav0QeWTwfRaOP')
            .then((res) => {
                handleCleanForce()
                toast.success('Email enviado com sucesso')
                toggleLoading(false)
            }, (error) => {
                toast.error('Erro ao enviar')
                toggleLoading(false)
            })
    }
    return (
        <>
        <Toaster/>
        <div className="w-full h-screen flex flex-col justify-center text-slate-800 pt-24">
            <h1 className="font-bold font-sans text-2xl lg:text-2xl mb-16 lg:ml-10 self-start">Fale comigo</h1>
            <div className="flex flex-col gap-6 justify-start items-center p-5 pb-20 ">
                <div className="flex flex-col gap-5 w-full justify-center items-center lg:max-w-[50%] lg:items-center">
                    <h2> Preencha o formulario para entrar em contato comigo pelo email: {' '}
                        <span className="font-bold">alarconhvitoria@gmail.com</span>
                    </h2>
                    <form className="flex flex-col gap-5 w-full justify-center items-center lg:items-center" ref={form} onSubmit={handleSendEmail} id="contact-form">
                        <Input id="name" name="from_name" label="Name" value={name} onChange={(e: any) => setName(e.target.value)} />
                        <Input id="email" name="reply_email" label="Email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
                        <TextArea id="message" name="message" label="Message" value={message} onChange={(e: any) => setMessage(e.target.value)} />
                    </form>
                </div>
                <div className="flex w-full gap-5 lg:max-w-[50%] lg:items-center">
                    <Button variant="outline" onClick={handleCleanForce}> Limpar </Button>
                    <Button type="submit" form="contact-form" > Enviar </Button>
                </div>
            </div>
        </div>
        </>
    )
}