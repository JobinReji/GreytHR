import { useState } from "react";
import Select from "react-select";
import { CircleCheck, CircleX } from "lucide-react";

const options = [
  { value: "Venkatsubramanian_R", label: "Venkatsubramanian R" },
  { value: "Maheswari_R", label: "Maheswari R" },
  { value: "Soamilal_K", label: "Soamilal K" },
];

export default function SummaryView() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [leaveData, setLeaveData] = useState([
    {
      id: 1,
      empId: "NNDS001",
      fullName: "Venkatsubramanian R",
      el: 8,
      cl: 4,
      sl: 0,
      WFH: 0,
      LeaveWfh: true,
    },
    {
      id: 2,
      empId: "NNDS002",
      fullName: "Maheswari R",
      el: 0,
      cl: 5,
      sl: 2,
      WFH: 0,
      LeaveWfh: false,
    },
    {
      id: 3,
      empId: "NNDS003",
      fullName: "Soamilal K",
      el: 12,
      cl: 0,
      sl: 9,
      WFH: 0,
      LeaveWfh: true,
    },
  ]);
  const columns = [
    { name: "Sr. No.", minWidth: "50px" },
    { name: "Employee IDs", minWidth: "100px" },
    { name: "Full Name", minWidth: "180px" },
    { name: "EL (12 days)", minWidth: "100px" },
    { name: "CL (6 days)", minWidth: "100px" },
    { name: "SL (6 days)", minWidth: "80px" },
    { name: "WFH", minWidth: "100px" },
    { name: "Leave/ WFH In progress", minWidth: "100px" },
  ];

  const getEmployeeValue = (leave, column) => {
    switch (column) {
      case "Sr. No.":
        return leave.id;
      case "Employee IDs":
        return leave.empId;
      case "Full Name":
        return leave.fullName;
      case "EL (12 days)":
        return leave.el;
      case "CL (6 days)":
        return leave.cl;
      case "SL (6 days)":
        return leave.sl;
      case "WFH":
        return leave.WFH;
      case "Leave/ WFH In progress":
        return (
          <div className="flex justify-center items-center">
            {leave.LeaveWfh ? (
              <CircleCheck style={{ color: "#50ac5d" }} />
            ) : (
              <CircleX style={{ color: "#d7062a" }} />
            )}
          </div>
        );
      default:
        return "";
    }
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
    <div className="flex flex-col items-center justify-between h-full w-full relative bg">
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
      <div className="h-[80%] w-full">
        <div className="relative overflow-auto h-full mx-4">
          <table className="w-full text-left text-sm">
            <thead className="sticky top-0 z-10 dark:bg-[#375176] dark:text-[#67C4ED] bg-[#BA7C3C] text-white">
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    style={{ minWidth: column.minWidth }}
                    className={`py-3 px-4 text-center border-r border-dashed border-white font-bold ${
                      index === 0
                        ? "rounded-l-full"
                        : index === columns.length - 1
                        ? "rounded-r-full border-r-0"
                        : ""
                    }`}
                  >
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#344174] dark:text-white">
              {leaveData.map((leave, index) => (
                <tr
                  key={index}
                  className="border-b border-b-[#BA7C3C] dark:border-b-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={`${leave.id}-${column.name}`}
                      style={{
                        minWidth: column.minWidth,
                      }}
                      className={`py-3 px-4 text-left border-dashed border-gray-200 dark:border-gray-600 ${
                        colIndex === columns.length - 1 ? "" : "border-r"
                      }`}
                    >
                      {getEmployeeValue(leave, column.name)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
