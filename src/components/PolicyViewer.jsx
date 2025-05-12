import { Trash2 } from "lucide-react";
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.worker;

export default function PolicyViewer({ initialDocuments = [] }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showGrid, setShowGrid] = useState(true);
  const [currntDoc, setCurrntDoc] = useState(null);
  const [documents, setDocuments] = useState(initialDocuments || []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  function goToPreviousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function toggleView(doc = null) {
    if (doc) {
      setCurrntDoc(doc);
      setPageNumber(1); // Reset to first page when switching documents
      setNumPages(null); // Reset numPages when switching documents
    }
    setShowGrid(!showGrid);
  }

  function handleDelete(id, e) {
    e.stopPropagation();
    setDocuments(documents.filter((doc) => doc.id !== id));
    if (currntDoc && currntDoc.id === id) {
      setShowGrid(true);
      setCurrntDoc(null);
    }
  }

  return (
    <div className="relative overflow-auto h-full p-4">
      <div className={`grid grid-cols-3 gap-4 ${showGrid ? "" : "hidden"}`}>
        {documents.map((doc) => (
          <MenuBtn
            key={doc.id}
            count={doc.count}
            title={doc.title}
            subTitle={doc.subTitle}
            onSubTitleClick={() => toggleView(doc)}
            onDelete={(e) => handleDelete(doc.id, e)}
          />
        ))}
      </div>
      <div
        className={`w-full h-full relative ${
          showGrid ? "hidden" : "flex justify-center items-center"
        }`}
      >
        <div className="absolute top-0 left-0">
          <FaAngleLeft
            className="text-3xl m-2 cursor-pointer text-[#BA7C3C] dark:text-white"
            onClick={() => toggleView()}
          />
        </div>
        <div className="w-[85%] h-full">
          {currntDoc && (
            <Document
              file={currntDoc.file}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          )}

          {numPages && (
            <div className="flex justify-between mt-4">
              <button
                onClick={goToPreviousPage}
                disabled={pageNumber === 1}
                className="px-4 py-2 bg-[#BA7C3C] dark:bg-[#375176] rounded-md cursor-pointer"
              >
                Previous
              </button>
              <p className="text-lg font-bold text-[#BA7C3C] dark:text-white">
                Page {pageNumber} of {numPages}
              </p>
              <button
                onClick={goToNextPage}
                disabled={pageNumber === numPages}
                className="px-4 py-2 bg-[#BA7C3C] dark:bg-[#375176] rounded-md cursor-pointer"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MenuBtn({ count, title, subTitle, onSubTitleClick, onDelete }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#BA7C3C] dark:from-[#324F79] via-[#BDA892] dark:via-[#0D1227] to-[#BA7C3C] dark:to-[#324F79] shadow-[10px_10px_30px_0px_rgba(0,0,0,0.50)] min-h-[80px] max-h-[100px]">
      <div className="absolute left-0 top-[20%] w-20 h-20 rotate-[89.69deg] bg-yellow-600 dark:bg-blue-700 rounded-full blur-lg"></div>
      <div className="absolute right-0 top-[20%] w-20 h-20 rotate-[89.69deg] bg-red-400 dark:bg-red-700 rounded-full blur-lg"></div>
      <div className="backdrop-blur-2xl z-10 min-h-[95px] max-h-[115px] bg-[#805E5480] dark:bg-[#37517680] flex items-center justify-between m-[3px] p-4 rounded-xl">
        <div className="font-bold text-lg">{count}</div>
        <div>
          <div className="text-lg font-bold m-1">{title}</div>
          <div
            className="underline text-sm cursor-pointer hover:text-gray-400 m-1"
            onClick={onSubTitleClick}
          >
            {subTitle}
          </div>
        </div>
        <div>
          <button className="cursor-pointer" onClick={onDelete} title="Delete">
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
}
