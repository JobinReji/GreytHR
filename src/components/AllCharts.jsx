import * as echarts from "echarts";
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

const WorkingHoursChart = () => {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const axisLineColor = theme === "dark" ? "#ffffff" : "#000000";
  const gridBorderColor =
    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)";

  const option = {
    title: {
      text: "Average Working Hours Trend",
      left: "center",
      top: "3%",
      textStyle: {
        color: textColor, // Set title color to white
      },
    },
    xAxis: {
      type: "category",
      data: [
        "D1",
        "D2",
        "D3",
        "D4",
        "D5",
        "D6",
        "D7",
        "D8",
        "D9",
        "D10",
        "D11",
        "D12",
        "D13",
        "D14",
        "D15",
        "D16",
        "D17",
        "D18",
        "D19",
        "D20",
      ],
      axisLabel: {
        color: textColor, // Set x-axis label color to white
      },
      axisLine: {
        lineStyle: {
          color: axisLineColor, // Set x-axis line color to white
        },
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 600,
      interval: 100,
      axisLabel: {
        color: textColor, // Set y-axis label color to white
      },
      splitLine: {
        lineStyle: {
          color: gridBorderColor, // Set split line color to dark gray
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
        name: "Average Working Hours",
        type: "line",
        smooth: false, // Make the line smooth as in the image
        data: [
          100, 200, 414, 312, 446, 319, 386, 489, 367, 496, 471, 470, 495, 467,
          396, 300, 327, 304, 433, 410,
        ],
        itemStyle: {
          color: "#A0647E", // Line color (a shade of pink/purple from the image)
        },
        lineStyle: {
          width: 2, // Adjust line width if needed
        },
        label: {
          show: true,
          position: "top",
          color: textColor, // Label color above points
        },
      },
    ],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
  };
  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const LoginTrendChart = () => {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const axisLineColor = theme === "dark" ? "#ffffff" : "#000000";
  const gridBorderColor =
    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)";

  const option = {
    title: {
      text: "Login Trend",
      left: "center",
      top: "3%",
      textStyle: {
        color: textColor, // Set title color to white
      },
    },
    xAxis: {
      type: "category",
      data: [
        "D1",
        "D2",
        "D3",
        "D4",
        "D5",
        "D6",
        "D7",
        "D8",
        "D9",
        "D10",
        "D11",
        "D12",
        "D13",
        "D14",
        "D15",
        "D16",
        "D17",
        "D18",
        "D19",
        "D20",
      ],
      axisLabel: {
        color: textColor, // Set x-axis label color to white
      },
      axisLine: {
        lineStyle: {
          color: axisLineColor, // Set x-axis line color to white
        },
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 12, // Max is 12:00
      interval: 1.2, // Approximately 1 hour 12 minutes interval for major ticks (1:12, 2:24, 3:36, etc.)
      axisLabel: {
        formatter: function (value, index) {
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
        color: textColor, // Set y-axis label color to white
      },
      splitLine: {
        lineStyle: {
          color: gridBorderColor, // Set split line color to dark gray
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
        name: "Login Time",
        type: "line",
        smooth: false, // Make the line smooth as in the image
        data: [
          // Convert time to decimal hours for data values
          9.166, // 9:10
          8.066, // 8:04
          9.6, // 9:36
          11.0, // 11:00
          9.75, // 9:45
          9.833, // 9:50
          9.333, // 9:20
          10.0, // 10:00
          9.5, // 9:30
          9.416, // 9:25
          9.983, // 9:59
          10.166, // 10:10
          9.0, // 9:00
          8.833, // 8:50
          10.083, // 10:05
          9.666, // 9:40
          9.716, // 9:43
          9.583, // 9:35
          9.033, // 9:02
          9.0, // 9:00
        ],
        itemStyle: {
          color: "#A0647E", // Line color (a shade of pink/purple from the image)
        },
        lineStyle: {
          width: 2, // Adjust line width if needed
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
          color: textColor, // Label color above points
        },
      },
    ],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        const value = params[0].value;
        const hours = Math.floor(value);
        const minutes = Math.round((value - hours) * 60);
        return (
          params[0].name +
          "<br/>Login Time: " +
          (hours < 10 ? "0" : "") +
          hours +
          ":" +
          (minutes < 10 ? "0" : "") +
          minutes
        );
      },
    },
  };
  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const LogoutTrendChart = () => {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const axisLineColor = theme === "dark" ? "#ffffff" : "#000000";
  const gridBorderColor =
    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)";

  const option = {
    title: {
      text: "Login Trend", // Assuming this is the title based on previous similar charts
      left: "center",
      top: "3%",
      textStyle: {
        color: textColor, // Set title color to white
      },
    },
    xAxis: {
      type: "category",
      data: [
        "D1",
        "D2",
        "D3",
        "D4",
        "D5",
        "D6",
        "D7",
        "D8",
        "D9",
        "D10",
        "D11",
        "D12",
        "D13",
        "D14",
        "D15",
        "D16",
        "D17",
        "D18",
        "D19",
        "D20",
      ],
      axisLabel: {
        color: textColor, // Set x-axis label color to white
      },
      axisLine: {
        lineStyle: {
          color: axisLineColor, // Set x-axis line color to white
        },
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 24, // Max is 24 hours (implied by the 0:00 tick and scale)
      interval: 4.8, // Approximately 4 hours 48 minutes for major ticks (4:48, 9:36, 14:24, 19:12, 0:00)
      axisLabel: {
        formatter: function (value, index) {
          // Handle wrap-around for 0:00 to 24:00 if needed for time values
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
          color: gridBorderColor, // Set split line color to dark gray
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
        name: "Time",
        type: "line",
        smooth: false, // Make the line smooth as in the image
        data: [
          // Convert time to decimal hours (24-hour format) for data values
          18.166, // 18:10
          18.0, // 18:00
          18.5, // 18:30
          23.0, // 23:00
          21.75, // 21:45
          21.833, // 21:50
          21.333, // 21:20
          22.0, // 22:00
          20.5, // 20:30
          19.983, // 19:59
          20.416, // 20:25
          20.166, // 20:10
          21.0, // 21:00
          20.833, // 20:50
          21.0, // 21:00
          19.666, // 19:40
          19.716, // 19:43
          19.033, // 19:02
          18.916, // 18:55
          19.0, // 19:00
        ],
        itemStyle: {
          color: "#A0647E", // Line color (a shade of pink/purple from the image)
        },
        lineStyle: {
          width: 2, // Adjust line width if needed
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
          color: textColor, // Label color above points
        },
      },
    ],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        const value = params[0].value;
        const hours = Math.floor(value);
        const minutes = Math.round((value - hours) * 60);
        return (
          params[0].name +
          "<br/>Time: " +
          (hours < 10 ? "0" : "") +
          hours +
          ":" +
          (minutes < 10 ? "0" : "") +
          minutes
        );
      },
    },
  };
  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const DeepDiveChart = () => {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const axisLineColor = theme === "dark" ? "#ffffff" : "#000000";
  const gridBorderColor =
    theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)";

  // Helper function to convert HH:mm to milliseconds on a reference date
  function timeToMs(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    // Use a fixed reference date (e.g., today's date) to convert time to milliseconds
    // This helps ensure consistent X-axis scale for all days
    const referenceDate = new Date();
    referenceDate.setHours(hours, minutes, 0, 0);
    return referenceDate.getTime();
  }

  // Helper function to convert milliseconds to HH:mm for labels
  function msToTime(ms) {
    const date = new Date(ms);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes
    );
  }

  var data = [];
  var categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Define the colors for working time
  var workingColor = "#A0647E"; // Bar color

  // Example working time data for each day (start and end times of working segments)
  // These are illustrative and can be expanded or replaced with real data
  // Format: [{ start: 'HH:mm', end: 'HH:mm' }, ...] for each day
  var mockEmployeeWorkingData = [
    // D1 (Monday)
    [
      { start: "09:30", end: "11:00" }, // In office
      { start: "11:10", end: "14:00" }, // Back from break
      { start: "15:00", end: "17:00" }, // Back from lunch
      { start: "17:10", end: "18:30" }, // Back from break
    ],
    // D2 (Tuesday)
    [
      { start: "09:00", end: "12:00" },
      { start: "13:00", end: "17:30" },
    ],
    // D3 (Wednesday)
    [
      { start: "08:45", end: "12:15" },
      { start: "13:30", end: "18:00" },
    ],
    // D4 (Thursday)
    [
      { start: "10:00", end: "13:00" },
      { start: "14:00", end: "17:00" },
      { start: "17:30", end: "19:00" },
    ],
    // D5 (Friday)
    [
      { start: "09:15", end: "11:45" },
      { start: "12:45", end: "16:00" },
      { start: "16:30", end: "18:00" },
    ],
    // D6 (Saturday)
    [
      { start: "09:00", end: "13:00" },
      { start: "14:00", end: "17:00" },
    ],
  ];

  // Generate data for the chart
  categories.forEach(function (category, index) {
    mockEmployeeWorkingData[index].forEach(function (segment) {
      const startTimeMs = timeToMs(segment.start);
      const endTimeMs = timeToMs(segment.end);
      const duration = endTimeMs - startTimeMs; // Duration in milliseconds

      data.push({
        name: "Working Time",
        value: [index, startTimeMs, endTimeMs, duration],
        itemStyle: {
          normal: {
            color: workingColor,
          },
        },
      });
    });
  });

  // Define the reference start and end times for the X-axis
  const xAxisMinMs = timeToMs("08:00");
  const xAxisMaxMs = timeToMs("23:00"); // 11:00 PM

  function renderItem(params, api) {
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = api.size([0, 1])[1] * 0.6; // Use 60% of category height

    var rectShape = echarts.graphic.clipRectByRect(
      {
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height,
      },
      {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height,
      }
    );
    return (
      rectShape && {
        type: "rect",
        transition: ["shape"],
        shape: rectShape,
        style: api.style(),
      }
    );
  }

  const option = {
    tooltip: {
      formatter: function (params) {
        if (params.value) {
          const startTimeStr = msToTime(params.value[1]);
          const endTimeStr = msToTime(params.value[2]);
          const durationMs = params.value[3];
          const durationMinutes = Math.round(durationMs / (1000 * 60)); // Convert ms to minutes

          return `
          ${params.marker} ${params.name} <br/>
          From: ${startTimeStr} <br/>
          To: ${endTimeStr} <br/>
          Duration: ${durationMinutes} minutes
        `;
        }
        return "";
      },
    },
    title: {
      text: "Weekly Work Patterns",
      left: "center",
      textStyle: {
        color: textColor, // Use dynamic color
      },
    },
    dataZoom: [
      {
        type: "slider",
        filterMode: "weakFilter",
        showDataShadow: false,
        // *** MODIFICATION START ***
        bottom: 20,
        height: 30,
        // Color of the draggable handles
        handleStyle: {
          color: workingColor, // Use the workingColor for the handles for theme consistency
        },
        // Border color of the data zoom area
        borderColor: axisLineColor, // Use axisLineColor for the border for theme consistency
        // Text color for the labels on the slider
        textStyle: {
          color: textColor, // Use textColor for the labels for theme consistency
        },
        // Background color of the dataZoom component itself (the track)
        backgroundColor:
          theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)", // Light transparent shade for background
        // Color of the selected range area (the "shade" you asked about)
        fillerColor:
          theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)", // A slightly darker transparent shade for the filled part
        // *** MODIFICATION END ***
        labelFormatter: function (value) {
          return msToTime(value);
        },
      },
      {
        type: "inside",
        filterMode: "weakFilter",
      },
    ],
    grid: {
      // Shrink the chart height
      height: 210, // Reduced from 300 to 210 to make it "shirk" a bit more.
      left: "6%", // Adjust grid position
      right: "5%", // Adjust grid position
      // Increase bottom margin for the grid to create more space above the dataZoom.
      // Calculation: dataZoom bottom (20px) + dataZoom height (30px) + desired space (e.g., 20px) = 70px.
      bottom: 70, // This creates ~20px space between the grid bottom and dataZoom top.
    },
    xAxis: {
      min: xAxisMinMs,
      max: xAxisMaxMs,
      scale: true,
      axisLabel: {
        formatter: function (val) {
          return msToTime(val);
        },
        color: textColor, // Dark x-axis label color
      },
      axisLine: {
        lineStyle: {
          color: axisLineColor, // Light grey axis line
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: gridBorderColor, // Very light grey split lines
          type: "dashed", // Optional: dashed lines
        },
      },
    },
    yAxis: {
      data: categories,
      inverse: true,
      axisLabel: {
        color: textColor, // Dark y-axis label color
      },
      axisLine: {
        lineStyle: {
          color: axisLineColor, // Light grey axis line
        },
      },
      splitLine: {
        show: false, // Hide y-axis split lines for cleaner look
      },
    },
    series: [
      {
        type: "custom",
        renderItem: renderItem,
        itemStyle: {
          opacity: 0.9, // Slightly opaque
        },
        encode: {
          x: [1, 2], // Start time, End time
          y: 0, // Category index
        },
        data: data,
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

export {
  ExpenseBarChart,
  SummaryBarChart,
  WorkingHoursChart,
  LoginTrendChart,
  LogoutTrendChart,
  DeepDiveChart,
};
