import React, { useState } from "react";
import TextInput from "./shared/TextInput";
import Button from "./shared/Button";
import Message from "./shared/Message";
import here from "./shared/here.png";
import Image from "next/image";
import ScrollButton from "./shared/ScrollButton";
import { ImEnlarge } from "react-icons/im";
import { FcSettings } from "react-icons/fc";
import { GiSpeakerOff } from "react-icons/gi";
import { BiSkipNextCircle } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";

import styles from "./Landing.module.css";
const Landing = () => {
  const onHandleClick = () => {
    setEmail(true);
  };
  const [email, setEmail] = useState(false);

  return (
    <div className="flex items-center bg-[url('https://www.vadelabs.com/herobg.png')] bg-cover pb-[100px] overflow-hidden">
      <div className="ml-32">
        <div className="text-[70px] font-black leading-[83.5px] -tracking-[1.74px] mb-3">
          Integrate APIs <br />
          In Minutes
        </div>
        <div className="font-bold mb-16 ">
          Get ridiculously creative with your products <br />
          and let us do the hard work for you!
        </div>
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
                <div className="text-xs font-semibold ">Didn’t receive?</div>
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
      <div className={styles.clipImage}>
        <div className="flex flex-col justify-center bg-zinc-200/75 my-20 border-2 h-[445px] w-[745px] absolute rounded-[60px] border-zinc-100 drop-shadow-lg">
          <div className="flex m-16">
            <div className="m-1">
              <ImEnlarge />{" "}
            </div>
            <div className="m-1">
              <FcSettings color="black" />
            </div>
            <div className="m-1">
              <GiSpeakerOff />
            </div>
            <div className="m-1">
              <BiSkipNextCircle />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-[56px] w-[98px] rounded-lg bg-black flex items-center justify-center ">
              <FaPlay color="white" />
            </div>
          </div>
          <div className="flex justify-center rotate-[160deg] translate-y-1.5 relative right-16 ">
            <Image src={here} height={121} width={144} />
          </div>
          <div className="font-black font-[Exo 2] relative left-28 text-lg">
            TAKE A TOUR
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
