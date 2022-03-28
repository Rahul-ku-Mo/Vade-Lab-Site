import React from "react";
import hassle from "./shared/hassle.webp"
import Divider from "./shared/Divider";
import SpanText from "./shared/SpanText";
import Title from "./shared/Title";
import Image from "next/image";


const SkipComponent = () => {
  return (
    <div className="pt-32 rounded-t-[60px] px-20 border-t-2 shadow-[0_-11px_10px_0px_rgba(0,0,0,0.3)] ">
      <div className="pb-12 text-center font-semibold text-lg">
        We understand your needs to <SpanText value={"build integrated applications"} /> in today’s<br/>
        hyper-connected world. <SpanText value={"Skip the hassle"}/> to repeat a cumbersome process<br/>
       <SpanText value={"for each unique integration."}/> Join us to build reliable connections with<br/>
        multiple providers and <SpanText value={"cruise through backend"}/> with ease.
        
      </div>
      <div className="pb-[109px] flex justify-center">
        <Divider />
      </div>
        <div className="flex justify-center mb-[111px]">
        <Title value={"the hassle."} spanValue={"Skip"}/>
        </div>
      <div className="flex  justify-center mb-[200px]">
        <Image alt="img_src" src={hassle} width={1080} height={521}/>
      </div>
    </div>
  );
};

export default SkipComponent;
