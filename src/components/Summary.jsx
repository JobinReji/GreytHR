import { useState } from "react";
import { SummaryBarChart } from "./AllCharts";

export default function Summary() {
  const [selectedDate, setSelectedDate] = useState("");
  const [isToggle, setIsToggleOn] = useState(true);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    console.log("New date selected:", newDate); // Log immediately
    setSelectedDate(newDate);
  };

  const handleToggleChange = () => {
    setIsToggleOn(!isToggle);
    console.log(isToggle);
  };

  return (
    <div className="flex flex-col items-center justify-between h-[95%] w-full relative bg">
      <div className="m-2 w-full h-[10%] flex justify-center items-center gap-4">
        <div className="relative bg-white dark:bg-[#375176] rounded-md">
          <input
            type="date"
            name="doj"
            id="doj"
            required
            value={selectedDate}
            onChange={handleDateChange}
            className="peer w-[80%] text-[24px] invisible [&::-webkit-calendar-picker-indicator]:opacity-0"
          />
          <label
            htmlFor="doj"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[24px] peer-placeholder-shown:text-gray-400"
          >
            Select date
          </label>
          <button
            type="button"
            onClick={() => document.getElementById("doj").showPicker()}
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-auto"
            aria-label="Open date picker"
          >
            <svg
              className="w-5 h-5 text-[#ba7c3c] dark:text-[#67c4ed]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="absolute right-2">
          <div className="flipswitch">
            <input
              checked={isToggle}
              onChange={handleToggleChange}
              id="fs"
              className="flipswitch-cb"
              name="flipswitch"
              type="checkbox"
            />
            <label htmlFor="fs" className="flipswitch-label">
              <div className="flipswitch-inner"></div>
              <div className="flipswitch-switch"></div>
            </label>
          </div>
        </div>
      </div>
      <div className="w-full h-[90%]">
        <SummaryBarChart login={isToggle} />
      </div>
    </div>
  );
}
