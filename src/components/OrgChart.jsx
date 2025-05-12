import { useState, useRef } from "react";
import images from "../assets/imagePath";
import orgChart from "../assets/orgchart.png";
export default function OrgChart() {
  const [currentImage, setCurrentImage] = useState(orgChart);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.match("image.*")) {
        alert("Please select a valid image file.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setCurrentImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <>
      <div className="flex justify-center h-full w-full relative">
        <div className="flex justify-center items-center h-full w-[98%]">
          <img src={currentImage} alt="Org Chart" className="w-full h-auto" />
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
      </div>
      <div className="flex justify-center absolute overflow-hidden bottom-0 -right-18">
        <div className="relative flex justify-between bg-[#BA7C3C] dark:bg-[#375176] py-1 px-3 rounded-full">
          <button
            className="cursor-pointer"
            title="Upload Image"
            aria-label="Fourth action"
            onClick={handleButtonClick}
          >
            <img src={images.bot_ico_4} alt="Fourth action icon" />
          </button>
        </div>
      </div>
    </>
  );
}
