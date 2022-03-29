import React from "react";
import Button from "../shared/Button";
import logo from "./logo.png";

import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="flex justify-between drop-shadow-md mt-3 mb-2 border-b-2 backdrop-blur-md">
        <div className="ml-14">
          <Image alt="logo" width={186.27} height={48} src={logo} />
        </div>
        <div className="flex justify-between items-center text-base ">
          <div onClick={(e) => {
              e.preventDefault;
              window.location.replace('/#skip');
          }} className="pl-14 cursor-pointer">Skip the Hassle</div>
          <div 
            onClick={(e) => {
              e.preventDefault;
              window.location.replace('/#cruise');
          }}
          className="pl-14 cursor-pointer">Cruise through backend</div>
        </div>
        <div className="mr-16 mb-3 ">
          <Button value={"Get Early Access"} customRounding={"rounded-lg"} />
        </div>
      </div>
    </>
  );
};

export default Header;
