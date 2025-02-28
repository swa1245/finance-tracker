"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
  const imgRef = useRef()
  useEffect(()=>{
    const imgele = imgRef.current
    window.addEventListener("scroll",()=>{
      const scollpset = window.scrollY
      const scrollthresold = 100
      if(scollpset > scrollthresold){
        imgele.classList.add("scrolled")
      }else{
        imgele.classList.remove("scrolled")
      }
    })
    return()=> window.removeEventListener("scroll")
  },[])
  return (
    <div className="pb-20 px4">
      <div className="container text-center mx-auto">
        <h1 className="text-6xl text-center md:text-9xl lg:text-12xl pb-6 font-bold text-gray-700">
          Mange Ur fianances <br />
          with intellogence
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-600">
          an ai powered finanical staments platform that helps you make informed
          decisions about your finances.
        </p>
        <div className="flex justify-center gap-4 pt-10 mt-5">
          <Link href={"/dashboard"}>
            <Button size={"lg"} className="px-7">
              Get Started
            </Button>
          </Link>
          <Link
            href={"/demo"}
          >
            <Button size={"lg"} variant={"outline"} className="px-7">
              Watch demo
            </Button>
          </Link>
        </div>
        <div className="Hero-image-wra">
          <div ref={imgRef} className="Hero-imag">
            <Image
              src={"/b.jpg"}
              width={1280}
              height={720}
              alt="banner"
              className="rounded-lg shadow-2xl border mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
