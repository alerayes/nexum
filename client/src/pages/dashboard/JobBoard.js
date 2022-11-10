//import Pop from './JobBoardPopup.js'
import Popup from '../../components/Popup.js'
import React , { useEffect,useState } from 'react';

const getJobs = async () => {
    let url = `/api/v1/auth/getJobs`;
    console.log("in code");
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  };

const JobBoard = () => {
    const [buttonPopup, SetButtonPopup] = useState(false);

    const [job,setJobs] = useState([]);
            useEffect(() => {
                const getTasks = async () => {
                const jjs = await getJobs();
                setJobs(jjs);
                };
                getTasks();
            }, []);
    //const [name, Setname] = useState(false);
    return ( 
        
        <div className="alumni-list jobBoard-list-comp">
        <h1>Job Board </h1>
        <div className="search-list">
            <input type="text" />
            
            <button className="search" onClick={() => SetButtonPopup(true) }> Add New Job Post</button>       
        </div>
        <Popup trigger={buttonPopup} setTrigger={SetButtonPopup}>
                <h3>My Pop up</h3>
                <p>This is my button triggered popup</p>
            </Popup>
        <hr />
        <div className="jobList-detail">
            <ul>
            {
                                    job.map((job) => {
                                        console.log(job)

                                        return (
                                            <>
                                            <li>
                    <details>
                        <summary>{job.position} <span>Posted 1 day ago</span></summary>
                        <p className="jobSection">
                                <span>{job.company}</span>
                                <span>{job.location}</span>
                                <span>{job.employmenttype}</span>
                        </p>
                        
                        <p className="jobdescDetails">
                                <span className="descJob"><b>Description</b></span> <br />
                                {job.description}
                            </p>
                        
                    </details>
                </li>
                                            </>
                                        )
                                    })
                                }
                <li>
                    <details>
                        <summary>Journalist Senior <span>Posted 1 day ago</span></summary>
                        <p className="jobSection">
                                
                       
                        </p>
                        
                        <p className="jobdescDetails">
                                <span className="descJob"><b>Description</b></span> <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paria nostrud.
                            </p>
                        
                    </details>
                </li>
               
            </ul>    

        </div>
        </div>
            
        
        
     );
}
 
export default JobBoard;