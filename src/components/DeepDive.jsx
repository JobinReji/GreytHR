import { useState } from "react";
import Select from "react-select";
import {
  WorkingHoursChart,
  LoginTrendChart,
  LogoutTrendChart,
  DeepDiveChart,
} from "./AllCharts";

const options = [
  { value: "Venkatsubramanian_R", label: "Venkatsubramanian R" },
  { value: "Maheswari_R", label: "Maheswari R" },
  { value: "Soamilal_K", label: "Soamilal K" },
];

export default function DeepDive() {
  const [activeButton, setActiveButton] = useState("workingHours");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedMonthYear, setSelectedMonthYear] = useState("");

  const renderChart = () => {
    switch (activeButton) {
      case "workingHours":
        return <WorkingHoursChart />;
      case "loginTrend":
        return <LoginTrendChart />;
      case "logoutTrend":
        return <LogoutTrendChart />;
      case "deepDive":
        return <DeepDiveChart />;
      default:
        return <WorkingHoursChart />;
    }
  };

  const getButtonClass = (buttonName) => {
    const baseClasses =
      "border-2 font-semibold w-[18%] py-2 rounded-lg transition-all duration-300 cursor-pointer";
    const activeLight =
      "bg-[#A88A7B] border-[#ba7c3c] shadow-xl shadow-[#ba7c3c9b] text-white";
    const inactiveLight =
      "bg-[#D0C4C0] border-[#ba7c3c] hover:bg-[#ba7c3c] hover:text-white text-[#867767]";
    const activeDark =
      "dark:bg-[#264D89] dark:border-[#5b7eb2] dark:shadow-[#67c5ed9b] dark:text-white";
    const inactiveDark =
      "dark:bg-[#23324F] dark:border-[#5b7eb2] dark:hover:bg-[#264D89] dark:text-[#c3c3c3]";

    if (activeButton === buttonName) {
      return `${baseClasses} ${activeLight} ${activeDark}`;
    }
    return `${baseClasses} ${inactiveLight} ${inactiveDark}`;
  };

  const getSpanClasses = (buttonName) => {
    if (activeButton === buttonName) {
      return "py-2 border-b-4 border-white";
    }
    return "py-2";
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "var(--select-bg)",
      borderColor: "transparent",
      fontSize: "16px",
      padding: "2px",
      borderRadius: "6px",
      minHeight: "40px",
      boxShadow: state.isFocused ? "0 0 0 1px var(--select-focus)" : null,
      "&:hover": {
        borderColor: "var(--select-border-hover)",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "var(--option-selected-bg)"
        : "var(--option-bg)",
      color: state.isSelected
        ? "var(--option-selected-text)"
        : "var(--option-text)",
      "&:hover": {
        backgroundColor: "var(--option-hover-bg)",
        color: "var(--option-hover-text)",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "var(--select-text)",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "var(--menu-bg)",
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--placeholder-text)",
    }),
    clearIndicator: (base) => ({
      ...base,
      color: "var(--indicator-color)",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "var(--indicator-color)",
    }),
  };

  const handleMonthYearChange = (e) => {
    setSelectedMonthYear(e.target.value);
  };

  const handlePickerClick = () => {
    const input = document.getElementById("monthYear");
    if (input) {
      input.showPicker();
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-[95%] w-full relative bg">
      <div className="m-2 w-full h-[10%] flex justify-center items-center gap-4">
        <div className="m-2 h-[10%] flex justify-center items-center gap-4">
          <label className="text-[#ba7c3c] dark:text-[#315e71]">
            <span className="text-[#ba7c3c] dark:text-[#67c4ed] pl-2">
              Employee
            </span>
          </label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isClearable
            styles={customStyles}
            classNamePrefix="select"
            placeholder="Select an option"
          />
        </div>
        <div className="relative bg-white dark:bg-[#375176] rounded-md">
          <input
            type="month"
            name="monthYear"
            id="monthYear"
            required
            value={selectedMonthYear}
            onChange={handleMonthYearChange}
            className="peer w-[80%] text-[24px] invisible [&::-webkit-calendar-picker-indicator]:opacity-0"
          />
          <label
            htmlFor="monthYear"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[24px] peer-placeholder-shown:text-gray-400"
          >
            Select Month
          </label>
          <button
            type="button"
            onClick={handlePickerClick}
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
      </div>
      <div className="w-full h-[90%]">
        <div className="flex justify-around items-center h-[10%]">
          <div className="text-[#ba7c3c] dark:text-[#67c5ed]">
            <span className="font-semibold">Average Working Hours : </span>
            120 hrs
          </div>
          <div className="text-[#ba7c3c] dark:text-[#67c5ed]">
            <span className="font-semibold">Average Login : </span>
            9:45 A.M.
          </div>
          <div className="text-[#ba7c3c] dark:text-[#67c5ed]">
            <span className="font-semibold">Average Logout : </span>
            7:15 P.M.
          </div>
        </div>
        <div className="flex justify-around items-center my-4 h-[8%]">
          <button
            className={getButtonClass("workingHours")}
            onClick={() => setActiveButton("workingHours")}
          >
            <span className={getSpanClasses("workingHours")}>
              Average Working Hours
            </span>
          </button>
          <button
            className={getButtonClass("loginTrend")}
            onClick={() => setActiveButton("loginTrend")}
          >
            <span className={getSpanClasses("loginTrend")}>Login Trend</span>
          </button>
          <button
            className={getButtonClass("logoutTrend")}
            onClick={() => setActiveButton("logoutTrend")}
          >
            <span className={getSpanClasses("logoutTrend")}>Logout Trend</span>
          </button>
          <button
            className={getButtonClass("deepDive")}
            onClick={() => setActiveButton("deepDive")}
          >
            <span className={getSpanClasses("deepDive")}>Deep Dive</span>
          </button>
        </div>
        <div className="h-[80%] w-[75%] m-auto">{renderChart()}</div>
      </div>
    </div>
  );
}

const formatMonthYear = (monthYearString) => {
  if (!monthYearString) return "";
  const [year, month] = monthYearString.split("-");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};
