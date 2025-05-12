import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import images from "../assets/imagePath";
import ColumnNamePopup from "./ColumnNamePopup";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function EmployeeInfo() {
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [columns, setColumns] = useState([
    "Sr. No.",
    "Employee IDs",
    "Full Name",
    "Designation",
    "Gender",
    "Qualification",
    "DOB",
    "DOJ",
    "DOR",
  ]);

  const employeeData = [
    {
      id: 1,
      empId: "NNDS001",
      fullName: "Venkatsubramanian R",
      designation: "Managing Director",
      gender: "Male",
      qualification: "Post-Graduate in Mathematics with Statistics",
      dob: "04/08/1969",
      doj: "01/04/2018",
      dor: "",
    },
    {
      id: 2,
      empId: "NNDS002",
      fullName: "Maheswari R",
      designation: "Senior Manager - Talent Acquisition",
      gender: "Female",
      qualification: "Msc Mathematics specialization in Computer Applications",
      dob: "08/07/1989",
      doj: "01/04/2018",
      dor: "",
    },
    {
      id: 3,
      empId: "NNDS003",
      fullName: "Soamilal K",
      designation: "Head of Information Technology",
      gender: "Male",
      qualification: "BE in Computer Science",
      dob: "27/05/1995",
      doj: "01/04/2018",
      dor: "",
    },
  ];

  // Animation variants
  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  const handleAddColumn = (columnName) => {
    if (!columns.includes(columnName)) {
      setColumns([...columns, columnName]);
    }
    setShowPopup(false);
  };

  const getEmployeeValue = (employee, column) => {
    switch (column) {
      case "Sr. No.":
        return employee.id;
      case "Employee IDs":
        return employee.empId;
      case "Full Name":
        return employee.fullName;
      case "Designation":
        return employee.designation;
      case "Gender":
        return employee.gender;
      case "Qualification":
        return employee.qualification;
      case "DOB":
        return employee.dob;
      case "DOJ":
        return employee.doj;
      case "DOR":
        return employee.dor;
      default:
        return "";
    }
  };
  return (
    <>
      <div className="p-6">
        <motion.div
          className="relative overflow-auto h-[90%]"
          initial="hidden"
          animate="visible"
          variants={tableVariants}
        >
          <table className="table-aut w-full text-left">
            <thead className="sticky top-0 dark:bg-[#375176] dark:text-[#67C4ED] bg-[#BA7C3C] text-white">
              <tr>
                {columns.map((column, index) => (
                  <motion.td
                    key={index}
                    className={`py-3 text-center border-r border-dashed border-white font-bold p-4 ${
                      index === 0
                        ? "rounded-l-full"
                        : index === columns.length - 1
                        ? "rounded-r-full border-r-0"
                        : ""
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {column}
                  </motion.td>
                ))}
              </tr>
            </thead>
            <tbody className=" text-[#344174] dark:text-white">
              {employeeData.map((employee, index) => (
                <tr
                  key={index}
                  className="py-5 border-b border-b-[#BA7C3C] dark:border-b-white"
                >
                  {columns.map((column) => (
                    <motion.td
                      key={`${employee.id}-${column}`}
                      className=" py-5 text-left p-4"
                      whileHover={{ scale: 1.01 }}
                    >
                      {getEmployeeValue(employee, column)}
                    </motion.td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <div className="absolute min-[1537px]:right-0 min-[1537px]:bottom-0 max-[1537px]:-right-6 max-[1537px]:-bottom-3">
          <div className="relative flex justify-between bg-[#BA7C3C] dark:bg-[#375176] py-2 px-4 rounded-full">
            <button
              className="cursor-pointer"
              aria-label="First action"
              title="Add Employee"
              onClick={() => setOpen(true)}
            >
              <img
                src={images.bot_ico_1}
                className="w-8"
                alt="First action icon"
              />
            </button>
            <div className="w-[3px] mx-2 rounded-full h-10 bg-white"></div>
            <button
              className="cursor-pointer"
              aria-label="Second action"
              title="Add Column"
              onClick={() => setShowPopup(true)}
            >
              <img
                src={images.bot_ico_2}
                className="w-8"
                alt="Second action icon"
              />
            </button>
            <div className="w-[3px] mx-2 rounded-full h-10 bg-white"></div>
            <button
              className="cursor-pointer"
              title="Download Data"
              aria-label="Third action"
            >
              <img
                src={images.bot_ico_3}
                className="w-8"
                alt="Third action icon"
              />
            </button>
            <div className="w-[3px] mx-2 rounded-full h-10 bg-white"></div>
            <button
              className="cursor-pointer"
              title="Upload Data"
              aria-label="Fourth action"
            >
              <img
                src={images.bot_ico_4}
                className="w-8"
                alt="Fourth action icon"
              />
            </button>
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  className="absolute w-[18rem] -top-[100px] -left-[170px]"
                  variants={popupVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <ColumnNamePopup
                    onSubmit={handleAddColumn}
                    onClose={() => setShowPopup(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white dark:bg-[#375176] text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="my-6">
                <DialogTitle className="flex justify-center text-2xl my-4 font-bold leading-6 text-[#ba7c3c] dark:text-white m-2">
                  Add Employee
                </DialogTitle>
                <div className="mx-6 text-gray-900 dark:text-white dialog-content">
                  <div className="max-h-[70vh] overflow-auto">
                    {/* Employee ID */}
                    <div className="m-2">
                      <input
                        type="text"
                        name="empId"
                        className="question w-full"
                        id="empId"
                        required
                        autoComplete="off"
                      />
                      <label
                        htmlFor="empId"
                        className="text-[#ba7c3c] dark:text-[#315e71] text-lb"
                      >
                        <span className="text-[#ba7c3c] dark:text-[#67c4ed] text-sp">
                          Employee ID
                        </span>
                      </label>
                    </div>

                    {/* Employee Name */}
                    <div className="m-2">
                      <input
                        type="text"
                        name="empName"
                        className="question  w-full"
                        id="empName"
                        required
                        autoComplete="off"
                      />
                      <label
                        htmlFor="empName"
                        className="text-[#ba7c3c] dark:text-[#315e71] text-lb"
                      >
                        <span className="text-[#ba7c3c] dark:text-[#67c4ed] text-sp">
                          Employee name
                        </span>
                      </label>
                    </div>

                    {/* Designation */}
                    <div className="m-2">
                      <input
                        type="text"
                        name="designation"
                        className="question  w-full"
                        id="designation"
                        required
                        autoComplete="off"
                      />
                      <label
                        htmlFor="designation"
                        className="text-[#ba7c3c] dark:text-[#315e71] text-lb"
                      >
                        <span className="text-[#ba7c3c] dark:text-[#67c4ed] text-sp">
                          Designation
                        </span>
                      </label>
                    </div>

                    {/* Gender Dropdown */}
                    <div className="m-2">
                      <label
                        htmlFor="gender"
                        className="text-[#ba7c3c] dark:text-[#315e71]"
                      >
                        <span className="text-[#ba7c3c] dark:text-[#67c4ed] pl-2">
                          Gender
                        </span>
                      </label>
                      <select
                        name="gender"
                        id="gender"
                        className="question w-full text-[24px] p-1 rounded-md mt-2 border border-[#ba7c3c] dark:border-white bg-white dark:bg-[#375176] text-gray-900 dark:text-white pr-8 outline-none"
                        required
                      >
                        <option value="" disabled selected>
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    {/* Qualification */}
                    <div className="m-2">
                      <input
                        type="text"
                        name="qualification"
                        className="question w-full"
                        id="qualification"
                        required
                        autoComplete="off"
                      />
                      <label
                        htmlFor="qualification"
                        className="text-[#ba7c3c] dark:text-[#315e71] text-lb"
                      >
                        <span className="text-[#ba7c3c] dark:text-[#67c4ed] text-sp">
                          Qualification
                        </span>
                      </label>
                    </div>

                    {/* Date of Birth (Date Picker) */}
                    <div className="m-2 relative">
                      <label
                        htmlFor="dob"
                        className="text-[#ba7c3c] dark:text-[#67c4ed] block mb-1 pl-2"
                      >
                        Date of Birth
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="dob"
                          className="question w-full pr-10 bg-white outline-none text-[24px] dark:bg-[#375176] text-gray-900 dark:text-white [&::-webkit-calendar-picker-indicator]:opacity-0" // Hide native icon
                          id="dob"
                          required
                        />
                        {/* Clickable custom icon that opens date picker */}
                        <button
                          type="button"
                          onClick={() =>
                            document.getElementById("dob").showPicker()
                          }
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

                    {/* Date of Joining (Date Picker) */}
                    <div className="m-2 relative">
                      <label
                        htmlFor="doj"
                        className="text-[#ba7c3c] dark:text-[#315e71] block mb-1"
                      >
                        <span className="text-[#ba7c3c] dark:text-[#67c4ed] pl-2">
                          Date of Joining
                        </span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="doj"
                          className="question w-full pr-10 outline-none text-[24px] bg-white dark:bg-[#375176] text-gray-900 dark:text-white [&::-webkit-calendar-picker-indicator]:opacity-0"
                          id="doj"
                          required
                        />
                        <button
                          type="button"
                          onClick={() =>
                            document.getElementById("doj").showPicker()
                          }
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
                  </div>
                  <div className="m-2 flex justify-center">
                    <input
                      type="submit"
                      className="bg-[#ba7c3c] dark:bg-[#67c4ed] hover:bg-[#a86c2c] dark:hover:bg-[#56b4dc] cursor-pointer rounded-lg font-bold text-lg text-white py-2 px-6 transition-colors duration-200"
                      value="Submit"
                    />
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
