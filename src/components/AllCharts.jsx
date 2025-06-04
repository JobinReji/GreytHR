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

  const option1 = {
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
    <ReactECharts option={option1} style={{ height: "100%", width: "100%" }} />
  );
};

export { ExpenseBarChart };
