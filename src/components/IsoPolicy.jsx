import images from "../assets/imagePath";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PolicyViewer from "./PolicyViewer";

const IsoPolicy = () => {
  const [activeTab, setActiveTab] = useState("HR");

  const tabDoc = {
    HR: [
      {
        id: 1,
        count: "1",
        title: "Document 1",
        subTitle: "Document 1 V2.0",
        file: "./doc1.pdf",
      },
      {
        id: 2,
        count: "2",
        title: "Document 2",
        subTitle: "Document 2 V1.2",
        file: "./doc2.pdf",
      },
      {
        id: 3,
        count: "3",
        title: "Document 3",
        subTitle: "Document 3 V1.0",
        file: "./doc3.pdf",
      },
      {
        id: 4,
        count: "4",
        title: "Document 4",
        subTitle: "Document 4 V1.0",
        file: "./doc1.pdf",
      },
      {
        id: 5,
        count: "5",
        title: "Document 5",
        subTitle: "Document 5 V1.0",
        file: "./doc2.pdf",
      },
    ],
    Operational: [
      {
        id: 1,
        count: "1",
        title: "Document 1",
        subTitle: "Document 1 V2.0",
        file: "./doc1.pdf",
      },
      {
        id: 2,
        count: "2",
        title: "Document 2",
        subTitle: "Document 2 V1.2",
        file: "./doc2.pdf",
      },
    ],
    "Information Security": [
      {
        id: 1,
        count: "1",
        title: "Document 1",
        subTitle: "Document 1 V2.0",
        file: "./doc1.pdf",
      },
      {
        id: 2,
        count: "2",
        title: "Document 2",
        subTitle: "Document 2 V1.2",
        file: "./doc2.pdf",
      },
      {
        id: 3,
        count: "3",
        title: "Document 3",
        subTitle: "Document 3 V1.0",
        file: "./doc3.pdf",
      },
    ],
    Admin: [
      {
        id: 1,
        count: "1",
        title: "Document 1",
        subTitle: "Document 1 V2.0",
        file: "./doc1.pdf",
      },
      {
        id: 2,
        count: "2",
        title: "Document 2",
        subTitle: "Document 2 V1.2",
        file: "./doc2.pdf",
      },
      {
        id: 3,
        count: "3",
        title: "Document 3",
        subTitle: "Document 3 V1.0",
        file: "./doc3.pdf",
      },
      {
        id: 4,
        count: "4",
        title: "Document 4",
        subTitle: "Document 4 V1.0",
        file: "./doc1.pdf",
      },
    ],
    IT: [
      {
        id: 1,
        count: "1",
        title: "Document 1",
        subTitle: "Document 1 V2.0",
        file: "./doc1.pdf",
      },
      {
        id: 2,
        count: "2",
        title: "Document 2",
        subTitle: "Document 2 V1.2",
        file: "./doc2.pdf",
      },
    ],
  };

  const tabContents = {
    HR: <PolicyViewer initialDocuments={tabDoc.HR} />,
    Operational: <PolicyViewer initialDocuments={tabDoc.Operational} />,
    "Information Security": (
      <PolicyViewer initialDocuments={tabDoc["Information Security"]} />
    ),
    Admin: <PolicyViewer initialDocuments={tabDoc.Admin} />,
    IT: <PolicyViewer initialDocuments={tabDoc.IT} />,
  };

  const isoBtns = () => {
    const btns = ["HR", "Operational", "Information Security", "Admin", "IT"];
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
            className="absolute inset-0 p-6 overflow-auto"
          >
            {tabContents[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="h-[10%] w-full flex justify-between items-end">
        {isoBtns()}
        <div className="w-[8%] flex justify-center">
          <div className="relative flex justify-between bg-[#BA7C3C] dark:bg-[#375176] py-1 px-3 rounded-full">
            <button
              className="cursor-pointer"
              title="Upload Data"
              aria-label="Fourth action"
            >
              <img src={images.bot_ico_4} alt="Fourth action icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsoPolicy;
