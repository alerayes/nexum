import React from "react";
import { Chart } from "react-google-charts";
import Piechart from './AdminDashboardPieChart.js'
import CourseChart from './CourseChart.js'
export const data = [
  ["Year", "Student", "Alumni"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

export const options = {
  chart: {
    title: "New Users"
  },
};

// export function App() {
//   return (
    
//   );
// }cd

const AdminDashboard = () => {
  return (
    <>
    <h1>Data Visualization</h1>
    <div className="dash-chart">
    
        <div className="chart1">
            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
        </div>
        <div className="chart2">
          <Piechart/>
        </div>
        <div className="chart3">
          <CourseChart />
        </div>
    </div>
    
    
    
    </>
  )
}

export default AdminDashboard

