import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Summary from "./Summary";
import DeepDive from "./DeepDive";

export default function AttendanceAlly() {
  const [activeTab, setActiveTab] = useState("Summary View");
  const tabContents = {
    "Summary View": <Summary />,
    "Deep-dive View": <DeepDive />,
  };
  const AttendanceAllyBtns = () => {
    const btns = ["Summary View", "Deep-dive View"];
    return (
      <div className="w-[50%] flex justify-between mx-10">
        {btns.map((btn) => (
          <motion.button
            key={btn}
            className={activeTab === btn ? "iso_active-btn" : "iso_btn"}
            onClick={() => setActiveTab(btn)}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {btn}
          </motion.button>
        ))}
      </div>
    );
  };
  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <div className="relative overflow-auto h-[90%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 p-4 overflow-auto"
          >
            {tabContents[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="h-[10%] w-[60%] flex justify-between items-end">
        {AttendanceAllyBtns()}
      </div>
    </div>
  );
}
