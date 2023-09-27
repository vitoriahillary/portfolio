import AboutMe from "@/components/Home/About Me";
import { Contact } from "@/components/Home/Contact/index";
import { LandingPage } from "@/components/Home/LandingPage";

export default function Home() {
  return (
    <>
      <div id="home">
        <LandingPage />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}
