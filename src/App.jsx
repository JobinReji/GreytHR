import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./contexts/ThemeContext.jsx";
import NavButton from "./components/NavButton.jsx";
import images from "./assets/imagePath.js";
import Header from "./components/Header.jsx";
import EmployeeInfo from "./components/EmployeeInfo.jsx";
import { useState } from "react";
import Tab2Content from "./components/Tab2Content.jsx";
import IsoPolicy from "./components/IsoPolicy.jsx";
import OrgChart from "./components/OrgChart.jsx";
import Expense from "./components/Expense.jsx";
import AttendanceAlly from "./components/AttendanceAlly.jsx";
import LeaveLounge from "./components/LeaveLounge.jsx";

function App() {
  const { theme } = useTheme();
  const titles = [
    "Employee Echo",
    "Insight Nexus",
    "Analytics Dashboard",
    "Career Connector",
    "Welcome Waypoint",
    "ISO Policy Vault",
    "Team Hierarchy Hive",
    "Attendance Ally",
    "Leave Lounge",
    "Expense Express",
    "Goodbye Gateway",
  ];
  const bgImage =
    theme === "dark" ? images.Employee_Echo_Dark : images.Employee_Echo_Light;
  const [activeTab, setActiveTab] = useState("tab_1");

  const currentTitle = titles[parseInt(activeTab.split("_")[1]) - 1];

  const typeOneTabs = ["tab_1"];
  const typeTwoTabs = ["tab_6"];

  // Tab content components mapping
  const tabContents = {
    tab_1: <EmployeeInfo />,
    tab_2: <Tab2Content />,
    // tab_3: <div>Content for Tab 3</div>,
    // tab_4: <div>Content for Tab 4</div>,
    // tab_5: <div>Content for Tab 5</div>,
    tab_6: <IsoPolicy />,
    tab_7: <OrgChart />,
    tab_8: <AttendanceAlly />,
    tab_9: <LeaveLounge />,
    tab_10: <Expense />,
    // tab_11: <div>Content for Tab 11</div>,
  };

  const renderBackground = () => {
    if (typeOneTabs.includes(activeTab)) {
      return (
        <>
          <svg
            className="w-full h-auto hidden dark:block"
            viewBox="0 0 1555 701"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-4" y="-4" width="1563" height="709">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(15px)",
                  clipPath: "url(#bgblur_0_360_382_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="4"
              d="M0 10C0 4.47717 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V627.967C1555 633.49 1550.52 637.967 1545 637.967H1461.5H1301.5C1295.98 637.967 1291.5 642.444 1291.5 647.967V691C1291.5 696.523 1287.02 701 1281.5 701H10C4.47716 701 0 696.523 0 691V10Z"
              fill="#375176"
              fillOpacity="0.5"
            />
            <defs>
              <clipPath
                id="bgblur_0_360_373_clip_path"
                transform="translate(4 4)"
              >
                <path d="M0 10C0 4.47717 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V627.967C1555 633.49 1550.52 637.967 1545 637.967H1461.5H1301.5C1295.98 637.967 1291.5 642.444 1291.5 647.967V691C1291.5 696.523 1287.02 701 1281.5 701H10C4.47716 701 0 696.523 0 691V10Z" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="w-full h-auto block dark:hidden"
            viewBox="0 0 1555 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-30" y="-30" width="1615" height="760">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(15px)",
                  clipPath: "url(#bgblur_0_360_382_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="30"
              d="M0 9.99998C0 4.47713 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V628.844C1555 634.367 1550.52 638.844 1545 638.844H1463.5H1303.5C1297.98 638.844 1293.5 643.321 1293.5 648.844V690C1293.5 695.523 1289.02 700 1283.5 700H10C4.47715 700 0 695.523 0 690V9.99998Z"
              fill="#805E54"
              fillOpacity="0.2"
            />
            <defs>
              <clipPath
                id="bgblur_0_360_382_clip_path"
                transform="translate(30 30)"
              >
                <path d="M0 9.99998C0 4.47713 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V628.844C1555 634.367 1550.52 638.844 1545 638.844H1463.5H1303.5C1297.98 638.844 1293.5 643.321 1293.5 648.844V690C1293.5 695.523 1289.02 700 1283.5 700H10C4.47715 700 0 695.523 0 690V9.99998Z" />
              </clipPath>
            </defs>
          </svg>
        </>
      );
    } else if (typeTwoTabs.includes(activeTab)) {
      return (
        <>
          <svg
            className="w-full h-auto block dark:hidden"
            viewBox="0 0 1555 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-30" y="-30" width="1615" height="760">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(15px)",
                  clipPath: "url(#bgblur_0_360_382_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="30"
              d="M0 9.99998C0 4.47713 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V628.844C1555 634.367 1550.52 638.844 1545 638.844H1463.5H1434.5C1428.98 638.844 1424.5 643.321 1424.5 648.844V690C1424.5 695.523 1420.02 700 1414.5 700H9.99999C4.47714 700 0 695.523 0 690V9.99998Z"
              fill="#805E54"
              fillOpacity="0.2"
            />
            <defs>
              <clipPath
                id="bgblur_0_360_382_clip_path"
                transform="translate(30 30)"
              >
                <path d="M0 9.99998C0 4.47713 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V628.844C1555 634.367 1550.52 638.844 1545 638.844H1463.5H1434.5C1428.98 638.844 1424.5 643.321 1424.5 648.844V690C1424.5 695.523 1420.02 700 1414.5 700H9.99999C4.47714 700 0 695.523 0 690V9.99998Z" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="w-full h-auto hidden dark:block"
            viewBox="0 0 1555 701"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-4" y="-4" width="1563" height="709">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(2px)",
                  clipPath: "url(#bgblur_0_360_373_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="4"
              d="M0 10C0 4.47717 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V627.967C1555 633.49 1550.52 637.967 1545 637.967H1461.5H1435C1429.48 637.967 1425 642.444 1425 647.967V691C1425 696.523 1420.52 701 1415 701H10C4.47717 701 0 696.523 0 691V10Z"
              fill="#375176"
              fillOpacity="0.5"
            />
            <defs>
              <clipPath
                id="bgblur_0_360_373_clip_path"
                transform="translate(4 4)"
              >
                <path d="M0 10C0 4.47717 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V627.967C1555 633.49 1550.52 637.967 1545 637.967H1461.5H1435C1429.48 637.967 1425 642.444 1425 647.967V691C1425 696.523 1420.52 701 1415 701H10C4.47717 701 0 696.523 0 691V10Z" />
              </clipPath>
            </defs>
          </svg>
        </>
      );
    } else {
      return (
        <>
          <svg
            className="w-full h-auto block dark:hidden"
            viewBox="0 0 1555 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-30" y="-30" width="1615" height="760">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(15px",
                  clipPath: "url(#bgblur_0_360_382_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="30"
              d="M0 9.99998C0 4.47713 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V638.844V690C1555 695.523 1550.52 700 1545 700H1293.5H10C4.47715 700 0 695.523 0 690V9.99998Z"
              fill="#805E54"
              fillOpacity="0.2"
            />
            <defs>
              <clipPath
                id="bgblur_0_360_382_clip_path"
                transform="translate(30 30)"
              >
                <path d="M0 9.99998C0 4.47713 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V638.844V690C1555 695.523 1550.52 700 1545 700H1293.5H10C4.47715 700 0 695.523 0 690V9.99998Z" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="w-full h-auto hidden dark:block"
            viewBox="0 0 1555 701"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-4" y="-4" width="1563" height="709">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(2px)",
                  clipPath: "url(#bgblur_0_360_373_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="4"
              d="M0 10C0 4.47717 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V637.967V691C1555 696.523 1550.52 701 1545 701H1291.5H10C4.47716 701 0 696.523 0 691V10Z"
              fill="#375176"
              fillOpacity="0.5"
            />
            <defs>
              <clipPath
                id="bgblur_0_360_373_clip_path"
                transform="translate(4 4)"
              >
                <path d="M0 10C0 4.47717 4.47715 0 10 0H1545C1550.52 0 1555 4.47715 1555 10V637.967V691C1555 696.523 1550.52 701 1545 701H1291.5H10C4.47716 701 0 696.523 0 691V10Z" />
              </clipPath>
            </defs>
          </svg>
        </>
      );
    }
  };
  return (
    <>
      <main
        className="bg-cover bg-center bg-no-repeat w-screen h-screen"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Header title={currentTitle} />
        <section className="flex justify-center w-full h-[82%]">
          <div className="w-[6%] z-10 flex items-center justify-end-safe">
            <div className="w-[100%] h-[96%] flex flex-col items-end justify-between">
              {Array.from({ length: 11 }, (_, i) => (
                <NavButton
                  key={`tab_${i + 1}`}
                  title={titles[i]}
                  id={`tab_${i + 1}`}
                  isActive={activeTab === `tab_${i + 1}`}
                  onClick={() => setActiveTab(`tab_${i + 1}`)}
                />
              ))}
            </div>
          </div>
          <div className="w-auto flex relative">
            {renderBackground()}
            <div className="absolute top-0 left-0 w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                  style={{ overflowX: "hidden" }}
                >
                  {tabContents[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
