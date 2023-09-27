'use client'
import { Button } from "@/components/Button";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function AboutMe() {
    const router = useRouter()
    return (
        <div className="pt-28 pb lg:pb-0">
            <h1 className="font-sans font-bold text-2xl lg:text-2xl mb-16 lg:ml-10 text-slate-800">Sobre mim</h1>
            <div className="flex flex-col lg:grid lg:grid-cols-2 text-slate-800 justify-start items-start gap-6 p-5 ">
                <div className="flex flex-col w-full justify-center items-center ">
                    <img src="/eu.jpg" alt="eu" className="rounded-full w-48 h-48 shadow-xl lg:w-64 lg:h-64 lg:shadow-xl" />
                    <div className="flex w-full justify-center items-center gap-1 mt-5">
                        <Link href="https://www.linkedin.com/in/vitória-hillary-alarcon" passHref={true} target="_blank">
                            <Button variant="ghost" className="w-13 cursor-pointer">
                                <Linkedin className="text-pink-500" />
                            </Button>
                        </Link>
                        <Link href="https://github.com/vitoriahillary" passHref={true} target="_blank">
                            <Button variant="ghost" className="w-13 cursor-pointer">
                                <Github className="text-pink-500" />
                            </Button>
                        </Link>
                        <Link href="https://www.instagram.com/vitoriahillary_/" passHref={true} target="_blank">
                            <Button variant="ghost" className="w-13 cursor-pointer">
                                <Instagram className="text-pink-500" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-6 border-l-2 border-gray-300">
                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans"> Eu </h2>
                                <p className="text-sm">
                                Tenho 19 anos e sou residente em Franca, SP. Minha paixão pela tecnologia foi despertada através da influência de familiares que já atuam nessa área. Desde então, tenho buscado constantemente conhecimento e desenvolvimento para me aprofundar cada vez mais no mundo da tecnologia. Estou sempre em busca de novos desafios e oportunidades para crescer nesse campo em constante evolução.
                                </p>
                            </div>
                        </div>
                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans"> Dev Frontend </h2>
                                <p className="text-sm">
                                Minhas habilidades em desenvolvimento frontend incluem HTML5, CSS3 e JavaScript, junto com o uso de tecnologias modernas como TypeScript e React. Tenho experiência em trabalhar com Node.js, Next.js, Git e GitHub para gerenciar o controle de versão de projetos. Além disso, estou familiarizado com frameworks como Express e tecnologias de contêineres como Docker. Meu conhecimento em SQL me permite lidar com bancos de dados, e minha experiência com a biblioteca Tailwind CSS ajuda a criar interfaces atraentes e responsivas.
                                </p>
                            </div>
                        </div>
                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-violet-50 border-2 border-zinc-700 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans"> Estudante </h2>
                                <p className="text-sm">
                                Sou um estudante de Ciência da Computação no Uni-FACEF, atualmente cursando o 4º semestre. Recentemente, concluí um estágio de três meses, onde tive a oportunidade de me desenvolver e aprender muito sobre o desenvolvimento full stack. Essa experiência me permitiu aplicar meus conhecimentos acadêmicos na prática e me preparou para desafios futuros na área de tecnologia.
                                </p>
                            </div>
                        </div>

                    </div>
                    <Button variant="ghost" className="underline rounded-lg text-pink-500 lg:w-2/4 lg:text-lg" onClick={() => router.push('/projects')}>
                        Conheça meus Projetos
                    </Button>
                </div>
            </div>
        </div>
    )
}