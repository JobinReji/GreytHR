import { useState } from "react";
import Select from "react-select";
import { ExpenseBarChart } from "./AllCharts";

const options = [
  { value: "Venkatsubramanian_R", label: "Venkatsubramanian R" },
  { value: "Maheswari_R", label: "Maheswari R" },
  { value: "Soamilal_K", label: "Soamilal K" },
];

export default function GraphView() {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "var(--select-bg)",
      borderColor: "transparent",
      fontSize: "16px",
      padding: "2px",
      borderRadius: "6px",
      minHeight: "40px",
      minWidth: "160px",
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

  return (
    <div className="flex flex-col items-center justify-between h-[95%] w-full relative bg">
      <div className="m-2 w-full h-[10%] flex justify-center items-center gap-4">
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
          className="mt-2"
          classNamePrefix="select"
          placeholder="Select an option"
        />
      </div>
    </div>
  );
}
