import AboutMe from "@/components/Home/About Me";
import Contact from "@/components/Home/Contact";
import { LandingPage } from "@/components/Home/LandingPage";

export default function Home() {
  return (
    <>
      <LandingPage/>
      <div id="about-me">
        <AboutMe/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </>
  )
}
