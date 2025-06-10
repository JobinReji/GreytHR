import { useState } from "react";
import Select from "react-select";
import { CircleCheck, CircleX, Download } from "lucide-react";

const options = [
  { value: "Venkatsubramanian_R", label: "Venkatsubramanian R" },
  { value: "Maheswari_R", label: "Maheswari R" },
  { value: "Soamilal_K", label: "Soamilal K" },
];

export default function DetailedView() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [leaveData, setLeaveData] = useState([
    {
      id: 1,
      empId: "NNDS001",
      fullName: "Venkatsubramanian R",
      leaveType: "CL",
      requestDate: "05/01/2024",
      fromDate: "06/01/2025",
      toDate: "10/01/2025",
      reason: "NIL",
      approvalStatus: true,
      approvalBy: "Venkatsubramanian R",
      approvalDate: "05/01/2024",
    },
    {
      id: 2,
      empId: "NNDS001",
      fullName: "Maheswari R",
      leaveType: "SL",
      requestDate: "11/09/2024",
      fromDate: "20/09/2024",
      toDate: "25/09/2024",
      reason: "NIL",
      approvalStatus: true,
      approvalBy: "Venkatsubramanian R",
      approvalDate: "11/09/2024",
    },
    {
      id: 3,
      empId: "NNDS001",
      fullName: "Venkatsubramanian R",
      leaveType: "EL",
      requestDate: "11/12/2024",
      fromDate: "06/01/2025",
      toDate: "07/01/2025",
      reason: "NIL",
      approvalStatus: false,
      approvalBy: "Venkatsubramanian R",
      approvalDate: "",
    },
  ]);
  const columns = [
    { name: "Sr. No.", minWidth: "50px" },
    { name: "Employee IDs", minWidth: "100px" },
    { name: "Full Name", minWidth: "180px" },
    { name: "Leave Type", minWidth: "100px" },
    { name: "Request Date", minWidth: "100px" },
    { name: "From Date", minWidth: "80px" },
    { name: "To Date", minWidth: "100px" },
    { name: "Reason", minWidth: "160px" },
    { name: "Approval Status", minWidth: "180px" },
    { name: "Approval By", minWidth: "180px" },
    { name: "Approval Date", minWidth: "100px" },
  ];

  const handleToggleChange = (id) => {
    setLeaveData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, approvalStatus: !item.approvalStatus }
          : item
      )
    );
  };

  const getEmployeeValue = (leave, column) => {
    switch (column) {
      case "Sr. No.":
        return leave.id;
      case "Employee IDs":
        return leave.empId;
      case "Full Name":
        return leave.fullName;
      case "Leave Type":
        return leave.leaveType;
      case "Request Date":
        return leave.requestDate;
      case "From Date":
        return leave.fromDate;
      case "To Date":
        return leave.toDate;
      case "Reason":
        return leave.reason;
      case "Approval Status":
        return (
          <div className="flex justify-center items-center">
            <div className="toggler">
              <input
                id={`toggler-${leave.id}`}
                name={`toggler-${leave.id}`}
                type="checkbox"
                checked={leave.approvalStatus}
                onChange={() => handleToggleChange(leave.id)}
              />
              <label
                className="bg-[#BA7C3C5b] dark:bg-[#0000005b] backdrop-blur-2xl"
                htmlFor={`toggler-${leave.id}`}
              >
                <svg
                  className="toggler-on"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 130.2 130.2"
                >
                  <polyline
                    className="path check"
                    points="100.2,40.2 51.5,88.8 29.8,67.5"
                  ></polyline>
                </svg>
                <svg
                  className="toggler-off"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 130.2 130.2"
                >
                  <line
                    className="path line"
                    x1="34.4"
                    y1="34.4"
                    x2="95.8"
                    y2="95.8"
                  ></line>
                  <line
                    className="path line"
                    x1="95.8"
                    y1="34.4"
                    x2="34.4"
                    y2="95.8"
                  ></line>
                </svg>
              </label>
            </div>
          </div>
        );
      case "Approval By":
        return leave.approvalBy;
      case "Approval Date":
        return leave.approvalDate;
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
