import { Hero } from "./_components/hero"
import { About } from "./_components/sobre"
import { Projects } from "./_components/projects"
import { Footer } from "./_components/footer"

export default function Home() {
  return(
    <main>
    <Hero />
    <About/>
    <Projects/>
    <Footer/>
    </main>
  )
}