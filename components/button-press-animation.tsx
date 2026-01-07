import { motion } from "motion/react";

export default function ButtonPressAnimation() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="border px-2 rounded-lg border-[#ababab] bg-[#F2F2F3] cursor-pointer"
    >
      Click me
    </motion.button>
  );
}
