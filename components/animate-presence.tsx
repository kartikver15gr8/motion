import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import TodoListExample from "./todos-sequential-exits";

/* AnimatePresence is used to handle exit animations for components that unmounts,
 preventing abrupt disappearances in list or modals common in project mgmt UI like Zenorizon.
 Wrap conditional motion elements with <AnimatePresence> and add an exit prop to define the leaving animation. Each child needs a unique key prop for proper tracking.
​
  */

export default function ToggleBox() {
  const [isVisible, setIsVisible] = useState(true);

  const [items, setItems] = useState(["Orange", "Banana"]);

  return (
    <>
      {/*  The below is an example for toggle visibility */}
      <div className="flex flex-col gap-y-2 items-center">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key="box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-3 border border-[#c8c8c9] rounded-xl bg-[#F2F2F3]"
            >
              Hello from AnimatePresence!
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="border border-[#c8c8c9] bg-[#F2F2F3] rounded-lg px-2 h-7 cursor-pointer w-fit"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      {/* this is an example where we're using animatepresence to delete list
      elements */}
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, x: 20 }} // initial position of span (x:20) and opacity is 20
            animate={{ opacity: 1, x: 0 }} // on mounting position changes with animation from 20 to 0, along with opacity to 1
            exit={{ opacity: 0, x: -20, scale: 0.9 }} // on unmounting we change the opacity to 0, and add animation
            transition={{ duration: 1, delay: index * 0.05 }} // i've increased the duration to let you understand
            className="border border-gray-400 rounded-xl p-2 w-[60%] flex items-center justify-between mb-2 shadow"
          >
            {item}
            <button
              className="bg-[#F2F2F3] cursor-pointer border border-[#F2F2F3] px-2 rounded-full"
              onClick={() =>
                setItems((items) => items.filter((i) => i !== item))
              }
            >
              Delete
            </button>
          </motion.span>
        ))}
      </AnimatePresence>
    </>
  );
}

/* A better example of deletion with mode:wait in sequential exits like todos app  */
{
  /* <TodoListExample /> */
}
