import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Working", 10],
  ["Not Working", 4]
];

export const options = {
  title: "Students/Alumni Employment Rate",
  pieHole: 0.4,
  is3D: false,
};
const Piechart = () => {
    return ( 
        <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
     );
}
 
export default Piechart;
