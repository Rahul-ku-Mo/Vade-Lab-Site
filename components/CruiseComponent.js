import React, { useState } from "react";
import Divider from "./shared/Divider";
import SpanText from "./shared/SpanText";
import Title from "./shared/Title";
import TextInput from "./shared/TextInput";
import Button from "./shared/Button";
import Heading from "./shared/Heading";
import Message from "./shared/Message";
import Image from "next/image";
import one from "./shared/one.gif";
import two from "./shared/two.gif";
import three from "./shared/three.gif";

import Curve from "./shared/Curve";
import Curve2 from "./shared/Curve2";

const CruiseComponent = () => {
  const [email, setEmail] = useState(false);
  const onHandleClick = () => {
    setEmail(true);
  };

  return (
    <div id="cruise">
      <div className="text-center pb-[140px] ">
        <Title spanValue={"Cruise"} value={"through backend."} />
      </div>

      <div className="px-36">
        <div className="flex justify-center mb-36">
          <div className="pr-[60px] w-[430px] h-[123px]">
            <Heading
              num={"#1"}
              value={"Choose from"}
              value2={"100+ integrations."}
            />
            <div className="font-normal text-[16px] leading-[27px] my-3">
              Vade Studio is designed to work seamlessly with your favourite
              databases or web services. <br />
              <span className="font-bold">
                Tweak a template or start from scratch.
              </span>
            </div>
            <div className="font-normal text-[16px] leading-[27px]">
              We've baked-in over 100 integrations directly into the platform,
              so you can integrate quickly and easily with other services,
              databases and applications out there.
            </div>
          </div>
          <div className="rounded-lg relative top-[3.75rem]">
            <Image alt="img_src" src={one} width={543} height={358} />
          </div>
        </div>
        <Curve />
        <div className="flex justify-center mb-36 items-center  ">
          <div className="rounded-lg relative top-[90px]">
            <Image alt="img_src" src={two} width={543} height={358} />
          </div>
          <div className="pl-[60px] w-[430px] h-[123px]">
            <div className="font-semibold text-[144px] leading-[84px] flex justify-end relative z-[-1] text-zinc-200 top-8 left-10">
              #2
            </div>
            <Heading value={"Configure & Connect."} />
            <div className="font-normal text-[16px] leading-[27px] mb-3 whitespace-pre">
              Get all of your
              <span className="font-bold pl-1">
                data sources connected into a <br /> content mesh, in the same
                place, in real time.
              </span>
            </div>
            <div className="font-normal text-[16px] leading-[27px]">
              This provides you a unified API for data navigation across all
              your integrated services.
            </div>
          </div>
        </div>
        <Curve2 />
        <div className="flex justify-center mb-36">
          <div className="pr-[60px] w-[430px] h-[123px]">
            <Heading num={"#3"} value={"Test. Build. Deploy."} />
            <div className="font-normal text-[16px] leading-[27px] mb-4">
              <span className="font-bold">
                Play around with the generated APIs.
              </span>
              <br />
              Once configured test, build and deploy
              <br /> the unified API into our secure and reliable
              infrastructure.
            </div>
            <div className="font-normal text-[16px] leading-[27px]">
              Run your queries in the editor and use our intuitive interface to
              <span className="font-bold pl-1">
                navigate through your data clean, organised and at your
                fingertips.
              </span>
            </div>
          </div>
          <div className="rounded-lg">
            <Image alt="img_src" src={three} width={543} height={358} />
          </div>
        </div>
        <div className="flex justify-center">
          <Divider />
        </div>
        <div className="text-center font-semibold text-lg pt-[67px] pb-[50px]">
          We're building an ecosystem where
          <SpanText value={"anyone can get inspired"} /> with <br />
          application templates, discover novel ideas from top builders, and
          <br />
          <SpanText value={"publish revolutionary applications"} /> that could
          <SpanText value={"change the world."} />
        </div>
      </div>
      <div className="flex justify-center mb-[177px]">
        {!email ? (
          <div className="flex mr-2">
            <TextInput type={"email"} placeholder={"email@example.com"} />
            <Button
              value={"Get Early Access"}
              customRounding={"rounded-r-lg"}
              onHandleClick={() => {
                onHandleClick();
              }}
            />
          </div>
        ) : (
          <div className="mr-2">
            <Message value={"Thank you for your interest!"} />
            <div className="flex justify-between">
              <div className="text-xs font-semibold mr-10">
                An email has been sent to your inbox.
              </div>
              <div>
                <div className="text-xs font-semibold ">Didn't receive?</div>
                <div
                  className="text-red-500 text-xs font-semibold cursor-pointer"
                  onClick={() => setEmail(!email)}
                >
                  Resend
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CruiseComponent;
