import Intro from "@/components/Intro"
import Skills from "@/components/Skills"

export default function Home() {
  return (<>
    <div className=' w-[80%] mx-auto pt-20 '>
     <Intro/>
     <div className=" grid grid-cols-[1fr_2fr] ">
<Skills/>

     </div>
    </div>
  </>

  )
}
