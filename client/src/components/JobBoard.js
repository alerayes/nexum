//import Pop from './JobBoardPopup.js'
import Popup from './Popup.js'
import React , { useState } from 'react';

const JobBoard = () => {
    const [buttonPopup, SetButtonPopup] = useState(false);
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
                <li>
                    <details>
                        <summary>Journalist Senior <span>Posted 1 day ago</span></summary>
                        <p className="jobSection">
                            
                                <span>Company Name</span>
                                <span>New Westminister, BC</span>
                                <span>Full-Time Position</span>
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