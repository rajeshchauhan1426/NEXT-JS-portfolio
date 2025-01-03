"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./gradientbg";
import { group } from "console";
import { useState } from "react";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'
import MagicButton from "./magicbutton";
import { IoCopyOutline } from 'react-icons/io5';
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id:number;
  img: string;
  imgClassName: string;
  titleClassName:string;
  spareImg: string; 
}) => {
  const [copied ,setCopied] = useState(false);
   
  const handleCopy = () => {
    navigator.clipboard.writeText('contact@rajesh.pro');

    setCopied(true)
  }

  return (
    <div
      className={cn(
        
        "row-span-1 relative rounded-3xl  overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
       )}
       style={{
        background:'rgb(2,0,36)',
        backgroundColor:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(22,192,207,1) 57%, rgba(0,212,255,1) 100%)'
       }}
    >
      <div className={`${id ===6} && flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img &&(
            <img
            src={img}
            alt={img}
            className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
            src={spareImg}
            alt={spareImg}
            className={'object-cover, object-center'}/>
          )}

        </div>
        {id ===6 &&(
          <BackgroundGradientAnimation>
            <div className="absolute flex items-center justify-center text-white font-bold  "/>
          </BackgroundGradientAnimation>
        )}
        <div className={cn(
          titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        
        {id === 2 && <GlobeDemo/>}

        {id === 3 && (
          <div className=" flex gap-4 lg:gap-2  absolute -right-40 lg:-right-19 sm:-right-7">
            <div className=" flex flex-col gap-4 lg:gap-8 ">
           
              {['React.js', 'Next.js', 'TypeScript'].map((item) => 
              (<span key={item} className="py-1  lg:py-1 lg:px-2 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-slate-600">
                {item}
              </span>))}
              <span className="py-4 px-3 rounded-lg text-center bg-slate-600"/>
            </div>
            
            <div className=" flex flex-col gap-4 lg:gap-8 ">
            <span className="py-4 px-3 rounded-lg text-center bg-slate-600"/>
              {['Docker', 'AWS', 'GraphQl '].map((item) => 
              (<span key={item} className="py-1  lg:py-1 lg:px-2 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-slate-600">
                {item}
              </span>))}
              
            </div>


          </div>
        )}
        {id === 6 && (
          <div className="mt-5 relative">
             <div className="absolute -bottom-5 right-0">
              <Lottie options={{
                loop:copied,
                autoplay: copied,
                animationData,
                rendererSettings:{
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}/>
             </div>
             <MagicButton 
             title={copied ? 'Email Copied' : 'Copy my email' }
             icon={<IoCopyOutline/>}
             position="left"
             otherClasses="!-[#161a31]"
             handleClick={handleCopy}/>
          </div>
        )}
        
        </div>
        </div>

      </div>
    
    
  );
};
