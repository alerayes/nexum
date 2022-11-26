import React from "react";
//import { useEffect } from "react";
//import { Chart } from "react-google-charts";
import Piechart from './AdminDashboardPieChart.js'
//import CourseChart from './CourseChart.js'
import BarChart from './barChart.js'





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
            <BarChart/>
        </div>
        <div className="chart2">
          <Piechart/>
        </div>
    </div>
    
    
    
    </>
  )
}

export default AdminDashboard

