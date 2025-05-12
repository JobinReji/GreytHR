import { motion, AnimatePresence } from "framer-motion";
import images from "../assets/imagePath.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header({ title = "Employee Echo" }) {
  return (
    <header className="py-2 flex justify-center">
      <div
        className="w-full mx-auto flex justify-between items-center"
        style={{ marginTop: "10px" }}
      >
        <div className="ml-10 w-[16%]">
          <img
            src={images.NeuralNet_Logo_Icon}
            className="w-20"
            alt="NeuralNet Logo"
          />
        </div>
        <motion.div
          className="text-[#BA7C3C] dark:text-white text-4xl font-bold"
          key={title}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.div>
        <div className="flex gap-1.5 w-[16%]">
          <div className="w-full flex justify-center items-center">
            {/* Theme Toggle  */}
            <ThemeToggle />
          </div>
          <div className="p-1.5 flex mr-10 bg-[#BA7C3C] dark:bg-[#375176] text-white rounded-full cursor-pointer">
            <div className="rounded-full">
              <img src={images.Jobin} className="w-28" alt="Profile picture" />
            </div>
            <div className="p-2">
              <i className="fas fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
