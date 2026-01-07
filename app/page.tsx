"use client";
import Image from "next/image";
import { motion } from "motion/react";
import OpacityAnimationCard from "@/components/opacity-animation";
import ButtonPressAnimation from "@/components/button-press-animation";
import ToggleBox from "@/components/animate-presence";

export default function Home() {
  return (
    <div className=" flex h-screen items-center justify-center">
      <div className="border h-96 w-[500px] flex items-center flex-col justify-center">
        {/* <OpacityAnimationCard /> */}
        {/* <ButtonPressAnimation /> */}
        <ToggleBox />
        {/*  */}
      </div>
    </div>
  );
}
