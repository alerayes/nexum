import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    [
      "Element",
      "Density",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Full-Stack Developer", 8.94, "#b87333", null],
    ["Sdfc", 10.49, "blue", null],
    ["Software Engineer", 19.3, "gold", null],
    ["Consultant", 21.45, "color: #e5e4e2", null],
  ];
  
  export const options = {
    title: "Student/Alumni Courses",
    width: 900,
    height: 200,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };


const CourseChart = () => {
    return ( 
        <Chart className="cchart"
            chartType="BarChart"
            width="900px"
            height="200px"
            data={data}
            options={options}
        />
     );
}
 
export default CourseChart;