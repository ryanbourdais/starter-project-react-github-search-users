import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "fusion",
        decimals: 1,
        pieRadius: "50%",
        paletteColors: [
          "#D70270",
          "#734F96",
          "#0038A8",
          "#ff218e",
          "#fcd800",
          "#0194fc",
        ],
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
