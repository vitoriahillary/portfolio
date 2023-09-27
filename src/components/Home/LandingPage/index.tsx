'use client'
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export function LandingPage() {
  const router = useRouter()
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 text-slate-800 justify-center items-center gap-6 h-screen">
      <div className="hidden lg:flex flex-col justify-center items-center">
        <img src="girl.svg" alt="image home" className="pl-5 pr-5"/>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-sans font-extrabold text-3xl self-start">
          {'< '}Ola, Meu nome é <span className="text-pink-400">{' '}Vitoria Hillary</span>{' />'}
        </h1>
        <p className="text-sm"> Olá e seja bem-vindo ao meu portfólio, um lugar onde compartilho minha jornada profissional e meus projetos pessoais. Sou um entusiasta da tecnologia e minha linguagem principal é o TypeScript. E gosto muito de React.</p>
        <p className="text-sm"> Ao navegar por este espaço, você terá a oportunidade de conhecer os desafios que enfrentei e as soluções que desenvolvi ao longo da minha carreira. Fique à vontade para explorar meus projetos e descobrir como a paixão pela programação se traduz em resultados incríveis.</p>
        <p className="text-sm"> Muito obrigado por visitar meu portfólio e espero que você encontre inspiração e insights aqui. Aproveite a jornada!</p>
        <div className="flex flex-col gap-6 lg:flex-row">
          <Button variant="outline" onClick={e => router.push('/#about-me')}>
            Sobre mim
          </Button>
          <Button>
            Meus Projetos
          </Button>
        </div>
      </div>
    </div>
  )
}