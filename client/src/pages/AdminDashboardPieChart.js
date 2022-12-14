import React ,{useEffect,useState} from "react";
import { Chart } from "react-google-charts";


let bodydata = [];
    let countAlumni = 0;
    let countStudent = 0;
    let bodydatafilter;
    let check = true;
    // Fetch Users
    const fetchUsers = async () => {
      const res = await fetch('https://nexum.wmdd4950.com/backend/api/v1/auth/getUsers')
      const data = await res.json()
      bodydata = data;
      console.log(data)
      if(check){
        bodydatafilter = bodydata.filter((a) =>{
        check = false;
        return (a.isWorking === "I am working in my field" ? countAlumni++ : countStudent++)
      })
    }
      console.log('Alumnni = ',countAlumni)
      console.log('Student = ',countStudent)
      
      console.log('idhar dekh' ,bodydatafilter)
      return data
    };


export const options = {
  title: "Students/Alumni Employment Rate",
  pieHole: 0.4,
  is3D: false,
};
const Piechart = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
          const users = await fetchUsers()
          setUsers(users)
        }
        getUsers()
      }, [])

    const data = [
        ["Task", "Hours per Day"],
        ["Working", countAlumni],
        ["Not Working", countStudent]
      ];

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
