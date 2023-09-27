'use client'
import { Button } from "@/components/Button";
import { Accordion } from "@/components/Projects/Accordion";

export default function Projects() {
    return (
        <div className="min-h-screen pt-20">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-16 lg:ml-10"> Projetos </h1>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="download.jpg" alt="" className="rounded-md lg:w-2/3 border-2 shadow-inner border-pink-600 hover:brightness-90" />
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                    <h2 className="text-lg font-sans font-bold text-purple-800">Meu projeto bacana</h2>
                    <p className="font-sm lg:text-md text-justify lg:w-2/3">Eu fiz esse projeto no intuito de aprender Javascript, ele e um projeto muito bacana, mas avabei gostando mais de frontend doq backend</p>
                    <div className="self-center w-80 lg:w-2/3 lg:self-start">
                        <Button variant="ghost" className="rounded-lg underline text-purple-800">
                            <a href="">Acesse meu projeto bacana aqui</a>
                        </Button>
                        <Button variant="ghost" className="rounded-lg underline font-thin">
                            <a href="">Este projeto no linkedin</a>
                        </Button>
                    </div>
                </div>
                
            </div>
            <div className="border-b-2 border-pink-600 mx-10 lg:mx-20 w-auto" />
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="download.jpg" alt="" className="rounded-md lg:w-2/3 border-2 shadow-inner border-pink-600 hover:brightness-90" />
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                    <h2 className="text-lg font-sans font-bold text-purple-800">Meu projeto bacana</h2>
                    <p className="font-sm lg:text-md text-justify lg:w-2/3">Eu fiz esse projeto no intuito de aprender Javascript, ele e um projeto muito bacana, mas avabei gostando mais de frontend doq backend</p>
                    <div className="self-center w-80 lg:w-2/3 lg:self-start">
                        <Accordion/>
                        <Button variant="ghost" className="rounded-lg underline font-thin">
                            <a href="">Este projeto no linkedin</a>
                        </Button>
                    </div>
                </div>
                
            </div>
            <div className="border-b-2 border-pink-600 mx-10 lg:mx-20 w-auto" />
        </div>
    )
}