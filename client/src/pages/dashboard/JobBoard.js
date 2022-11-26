//import Pop from './JobBoardPopup.js'
import Popup from '../../components/Popup.js'
import React , { useEffect,useState } from 'react';
//import Footer from "../../component/footer.js";

const getJobs = async () => {
    let url = `https://nexum.wmdd4950.com/backend/api/v1/auth/getJobs`;
    console.log("in code");
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.position);
    return data;
  };

const JobBoard = () => {
    const [buttonPopup, SetButtonPopup] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    const [job,setJobs] = useState([]);
            useEffect(() => {
                const getTasks = async () => {
                const jjs = await getJobs();
                console.log(jjs.position)
                setJobs(jjs);
                setFilteredUsers(jjs);
                };
                getTasks();
            }, []);
    
    useEffect(() => {
    
                if (!search) {
                  setFilteredUsers(job);
                  return
                }
                setFilteredUsers(
                    job.filter(
                    (item) =>
                      item.position.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
                  )
                );
                
        }, [search]);       
    
    //const [name, Setname] = useState(false);
    return ( 
        <>
        <div className="alumni-list jobBoard-list-comp">
        <h1>Job Board </h1>
        <div className="search-list">
        <input
              type="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            
            <button className="search" onClick={() => SetButtonPopup(true) }> Add New Job Post</button>       
        </div>
        <Popup trigger={buttonPopup} setTrigger={SetButtonPopup}>
                <h3>My Pop up</h3>
                <p>This is my button triggered popup</p>
            </Popup>
        <hr />
        <div className="jobList-detail">
            <ul>
            {filteredUsers.length > 0 ? (
                filteredUsers.map((job) =>(
                    <li key={job._id} >
                    <details>
                        <summary> {job.position} <span>Posted {job.board === 'today' ? job.board : job.board +'     ago'}</span></summary>
                        <p className="jobSection">
                                <span>{job.company}</span>
                                <span>{job.location}</span>
                                <span>{job.employmenttype}</span>
                        </p>
                        
                        <p className="jobdescDetails">
                                <span className="descJob"><b>Description</b></span> <br />
                                {job.description} <br/>
                                <div className='apply-btn'>
                              <a href={job.joblink} rel='noreferrer' target='_blank'>  <button>Apply Here</button> </a>
                                </div>
                                
                        </p>

                        
                        
                    </details>
                </li>
                ))
            ): (
                <div>No Jobs Posting</div>
            )
                
            }

            
            </ul>    

        </div>
        
        </div>
        {/* <Footer /> */}
        </>
            
        
        
     );
}
 
export default JobBoard;