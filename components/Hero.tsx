
import { Spotlight } from "./ui/Spotlight"
import MagicButton from "./ui/magicbutton"
import { TextGenerateEffect } from "./ui/textgenerate"
import { BsArrowUpRightCircleFill } from "react-icons/bs";


const Hero = () => {
    return (
       <div className="pb-20 pt-36">
          <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-white "/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw] fill-purple"/>
            <Spotlight className="top-28 lef  h-[80vh] w-[50vw] fill-blue-400 "/>
          </div>
          <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.3]  flex items-center justify-center absolute top-0 left-0" >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
       <div className="flex justify-center relative mt-20 z-10">
         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
               Dynamic Web MAgic With Next.js
            </h2>
            <TextGenerateEffect
            className=" uppercase text-center text-[40px] md:text-5xl lg:text-6xl"
            words="transforming concepts into seamless experinces"/>

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
               Hi, I&apos;m Rajesh , a Full Stack Web Developer based in Mumbai</p>

               <a href="#projects">
                  <MagicButton
                  
                  title="show my work"
                  icon=<BsArrowUpRightCircleFill />
                  position="right"
                  />
               </a>
         </div>

       </div>
       </div>
    )
}
export default Hero