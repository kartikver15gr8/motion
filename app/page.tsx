"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className=" flex h-screen items-center justify-center">
      <div className="border h-96 w-[500px]">
        <Box />
        <motion.button
          className="border rounded-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Click me
        </motion.button>
      </div>
    </div>
  );
}

function Box() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="h-40 w-40 border rounded-xl p-2"
    >
      <p>Henry</p>

      <p>hello</p>
    </motion.div>
  );
}
