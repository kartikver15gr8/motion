"use client";

import { motion } from "motion/react";
export default function OpacityAnimationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }} // we can also add repeat property in transition to give a pulsating effect (repeat: Infinity, repeatType: "reverse")
      className="h-60 w-52 border rounded-xl p-2 border-[#c1c1c1] bg-[#F2F2F3] flex flex-col items-center justify-center"
    >
      <p className="font-bold text-2xl">Fade in</p>
      <p className="font-bold text-2xl">Card</p>
    </motion.div>
  );
}
