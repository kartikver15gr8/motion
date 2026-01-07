"use clients";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function TodoListExample() {
  const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3"]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([inputValue, ...todos]);
      setInputValue("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-md border border-[#c6c6c6] mx-auto p-6 bg-gray-100 ">
      <h1 className="text-2xl font-bold mb-6 text-center">Zenorizon Tasks</h1>

      {/* Add Todo Input */}
      <div className="flex gap-2 mb-6">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          className="flex-1 p-1 px-2 h-8 text-sm border border-[#c6c6c6]  outline-none rounded-lg"
          placeholder="Add new task..."
        />
        <button
          onClick={addTodo}
          className="p-1 px-2 h-8  bg-[#828282] text-white rounded-lg cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* Animated Todo List */}
      <AnimatePresence>
        {todos.map((todo, index) => (
          <motion.div
            key={todo} // Unique key is crucial!
            className="flex items-center p-2 mb-1 bg-white rounded-xl shadow-sm border border-gray-200"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -30,
              scale: 0.8,
              transition: { duration: 0.25 },
            }}
            layout // Smooth position changes
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              delay: index * 0.05, // Staggered entrance
            }}
          >
            <span className="flex-1 text-gray-800">{todo}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => removeTodo(index)}
              className="px-4 py-2 text-red-500 hover:text-red-700 font-medium"
            >
              Delete
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>

      {todos.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-8"
        >
          No tasks yet. Add one above!
        </motion.p>
      )}
    </div>
  );
}
