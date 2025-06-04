import { color } from "echarts";
import ReactECharts from "echarts-for-react";
import { useTheme } from "../contexts/ThemeContext";

const ExpenseBarChart = () => {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const axisLineColor = theme === "dark" ? "#ffffff" : "#000000";
  const gridBorderColor =
    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)";
  const barColor = theme === "dark" ? "#67C4ED" : "#BA7C3C";

  const option = {
    backgroundColor: "transparent",
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr"],
      axisLine: {
        show: true,
        lineStyle: {
          color: axisLineColor,
        },
      },
      axisLabel: {
        color: textColor,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: textColor,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: gridBorderColor,
          type: "dashed",
        },
      },
      grid: {
        top: "0%",
        left: "3%",
        right: "4%",
        bottom: "2%",
        containLabel: true,
      },
    },
    series: [
      {
        data: [10000, 5000, 15000, 20000],
        type: "bar",
        barWidth: "40%",
        itemStyle: {
          color: barColor,
        },
        label: {
          show: true,
          position: "top",
          color: textColor,
          formatter: "₹{c}",
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const SummaryBarChart = ({ login = true }) => {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const axisLineColor =
    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)";
  const timeLable = login ? "Login Time" : "Logout Time";

  const option = {
    backgroundColor: "transparent", // Set background to black
    title: {
      text: timeLable,
      textStyle: {
        color: textColor, // Set title color to white
      },
      left: "center", // Center the title
    },
    xAxis: {
      type: "category",
      data: [
        "001",
        "002",
        "003",
        "004",
        "005",
        "006",
        "007",
        "008",
        "009",
        "010",
        "011",
        "012",
        "013",
        "014",
        "015",
        "016",
        "017",
        "018",
        "019",
        "020",
      ],
      axisLabel: {
        color: textColor, // Set x-axis label color to white
      },
      splitLine: {
        lineStyle: {
          color: axisLineColor, // Set split line color to a dark gray
        },
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 14.4, // Approximately 14:24 in decimal hours
      interval: 2.4, // Approximately 2 hours and 24 minutes interval for major ticks (2:24, 4:48, 7:12, 9:36, 12:00, 14:24)
      axisLabel: {
        formatter: function (value, index) {
          const hours = Math.floor(value);
          const minutes = Math.round((value - hours) * 60);
          return (
            (hours < 10 ? "0" : "") +
            hours +
            ":" +
            (minutes < 10 ? "0" : "") +
            minutes
          );
        },
        color: textColor, // Set y-axis label color to white
      },
      splitLine: {
        lineStyle: {
          color: axisLineColor, // Set split line color to a dark gray
        },
      },
      axisLine: {
        lineStyle: {
          color: axisLineColor, // Set y-axis line color to white
        },
      },
    },
    series: [
      {
        name: timeLable,
        type: "bar",
        data: [
          // Convert time to decimal hours for data values
          11.5, // 11:30
          9.0, // 9:00
          9.75, // 9:45
          11.0, // 11:00
          8.75, // 8:45
          9.75, // 9:45
          10.166, // 10:10 (approximately)
          8.0, // 8:00
          7.75, // 7:45
          10.5, // 10:30
          11.5, // 11:30
          9.0, // 9:00
          9.75, // 9:45
          11.0, // 11:00
          8.75, // 8:45
          9.75, // 9:45
          10.166, // 10:10 (approximately)
          8.0, // 8:00
          7.75, // 7:45
          10.5, // 10:30
        ],
        itemStyle: {
          color: "#A0647E", // Bar color (a shade of brown/pink from the image)
        },
        label: {
          show: true,
          position: "top",
          formatter: function (params) {
            const value = params.value;
            const hours = Math.floor(value);
            const minutes = Math.round((value - hours) * 60);
            return (
              (hours < 10 ? "" : "") +
              hours +
              ":" +
              (minutes < 10 ? "0" : "") +
              minutes
            );
          },
          color: textColor, // Label color above bars
        },
      },
    ],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "8%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        const value = params[0].value;
        const hours = Math.floor(value);
        const minutes = Math.round((value - hours) * 60);
        return `${params[0].name + "<br/>"}${timeLable}: ${
          +(hours < 10 ? "0" : "") +
          hours +
          ":" +
          (minutes < 10 ? "0" : "") +
          minutes
        }`;
      },
    },
    legend: {
      data: [timeLable],
      bottom: 0,
      textStyle: {
        color: textColor, // Set legend text color to white
      },
    },
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

export { ExpenseBarChart, SummaryBarChart };
