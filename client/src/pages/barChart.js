import React from "react";
import { Chart } from "react-google-charts";
import { useEffect,useState } from "react";

   
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
        return (a.status === "alumni" ? countAlumni++ : countStudent++)
      })
    }
      console.log('Alumnni = ',countAlumni)
      console.log('Student = ',countStudent)
      
      console.log('idhar dekh' ,bodydatafilter)
      return data
    };

    



  
  
  export const options = {
    chart: {
      title: "New Users"
    },
  };

const Barchart = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
          const users = await fetchUsers()
          setUsers(users)
        }
        getUsers()
      }, [])
     const data = [
        ["Year", "Student", "Alumni"],
        ["2019", 1, 1],
        ["2020", 2, 2],
        ["2021", 3, 4],
        ["2022",countStudent,countAlumni],
      ];
    return ( 
        <>
        
        <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      </>
     );
}
 
export default Barchart;


