import Experience from "@/components/Experience"
import Intro from "@/components/Intro"
import Skills from "@/components/Skills"

export default function Home() {
  return (<>
    <div className=' md:w-[80%] md:mx-auto mt-20 '>
      <Intro />
      <div className=" h-fit grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 ">
        <Skills />
        <Experience />
      </div>
    </div>
  </>

  )
}
