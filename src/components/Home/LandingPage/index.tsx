import { Button } from "@/components/Button";

export function LandingPage() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 text-white justify-center items-center gap-6 h-screen">
      <div className="hidden lg:flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-2/3 mb-10 ">
          <img src="https://i.pinimg.com/originals/dd/39/5a/dd395ab949222b0595e81846aa9fe0fb.png" alt="" className="rounded-full w-28 h-28 animate-bounce-slow shadow-2xl" />
          <img src="https://i.pinimg.com/originals/dd/39/5a/dd395ab949222b0595e81846aa9fe0fb.png" alt="" className="rounded-full w-28 h-28 animate-bounce-slow shadow-2xl" />
        </div>
        <div className="flex justify-center items-center">
          <img src="https://i.pinimg.com/originals/dd/39/5a/dd395ab949222b0595e81846aa9fe0fb.png" alt="" className="rounded-full w-28 h-28 animate-bounce-slow shadow-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-sans font-extrabold text-3xl self-start">
          Ola, Meu nome é Vitória
        </h1>
        <p className="text-sm"> Frase de efeito (bem-vindo ao meu portfolio, aqui vc encontra minha trajetoria e meus projetos pessoais) Minha linguragem principal é Typescript mas eu amo React</p>
        <p className="text-sm"> Frase de efeito (bem-vindo ao meu portfolio, aqui vc encontra minha trajetoria e meus projetos pessoais) Minha linguragem principal é Typescript mas eu amo React</p>
        <p className="text-sm"> Frase de efeito (bem-vindo ao meu portfolio, aqui vc encontra minha trajetoria e meus projetos pessoais) Minha linguragem principal é Typescript mas eu amo React</p>
        <div className="flex flex-col gap-6 lg:flex-row">
          <Button variant="outline">
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