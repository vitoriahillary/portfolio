import { Button } from "@/components/Button";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function AboutMe() {
    return (
        <div>
            <h1 className="font-sans font-bold text-2xl lg:text-2xl mb-16 lg:ml-10 text-white">Sobre mim</h1>
            <div className="flex flex-col lg:grid lg:grid-cols-2 text-white justify-start items-start gap-6 p-5 h-screen min-h-screen">
                <div className="flex flex-col w-full justify-center items-center ">
                    <img src="/eu.jpg" alt="eu" className="rounded-full w-48 h-48 shadow-xl lg:w-64 lg:h-64 lg:shadow-xl" />
                    <div className="flex w-full justify-center items-center gap-1 mt-5">
                        <Button variant="ghost" className="w-13 cursor-pointer">
                            <Linkedin className="text-purple-700" />
                        </Button>
                        <Button variant="ghost" className="w-13 cursor-pointer">
                            <Github className="text-purple-700" />
                        </Button>
                        <Button variant="ghost" className="w-13 cursor-pointer">
                            <Instagram className="text-purple-700" />
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-6 border-l-2 border-gray-300">
                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans"> Eu </h2>
                                <p className="text-sm">
                                    Eu sou uma pessoa muito dedicada e com facil aprendizado e busco conhecimentos constantes na minha jornada e
                                    evolucao, dado isso estou no 4 semestre de cc
                                </p>
                            </div>
                        </div>
                        <div className="pl-4 mb-10">
                            <div className="relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans"> Dev Frontend </h2>
                                <p className="text-sm">
                                    Eu sou uma pessoa muito dedicada e com facil aprendizado e busco conhecimentos constantes na minha jornada e
                                    evolucao, dado isso estou no 4 semestre de cc
                                </p>
                            </div>
                        </div>
                        <div className="pl-4 mb-10">
                            <div className="relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans"> Estudante </h2>
                                <p className="text-sm">
                                    Eu sou uma pessoa muito dedicada e com facil aprendizado e busco conhecimentos constantes na minha jornada e
                                    evolucao, dado isso estou no 4 semestre de cc
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <Button variant="ghost" className="underline rounded-lg text-purple-700 lg:w-2/4 lg:text-lg">
                        Conheça meus Projetos
                    </Button>
                </div>
            </div>
        </div>
    )
}