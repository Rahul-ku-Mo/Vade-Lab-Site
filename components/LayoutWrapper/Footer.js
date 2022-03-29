import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex bg-zinc-700 justify-between items-center h-64">
      <div className="pl-24 mb-10">
        <div className="text-zinc-200 mb-4">2022 Vade Labs Pvt. Ltd.</div>
        <div className="flex justify-center ">
          <BsLinkedin color="white" className="ml-2" />
          <BsTwitter color="white" className="ml-2" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="self-center text-zinc-400 mb-5">About us</div>
        <div className="text-zinc-200 self-center whitespace-pre-wrap">        We're a group of enthusiasts who love <br /> helping creatives build software applications.
        </div>
      </div>
      <div className=" flex flex-col align-center pr-24">
        <div className="self-center text-zinc-400 mb-5">Contact</div>
        <div className="self-center text-zinc-200">hello@vadelabs.com</div>
        <div className="self-center text-zinc-200">+91-7829887887</div>
      </div>
    </div>
  );
};

export default Footer;
