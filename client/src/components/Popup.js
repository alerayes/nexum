import React, { useState  } from 'react'
import { useJobpost } from "../hooks/useJobpost"
//import { useNavigate } from 'react-router-dom'
import success from '../assets/tick.png'
//import { Link } from 'react-router-dom'

function Popup(props) {
    const [formVisibility, setformVisibility] = useState(true)
    const [company, setCompany] = useState('Holinova Technology Ltd')
    const [location, setLocation] = useState('Richmond BC')
    const [position, setPosition] = useState('Software Developer')
    const [startdate, setStartDate] = useState('')
    const [employmenttype, setEmploymentType] = useState('')
    const [board, setBoard] = useState('')
    const [description, setDescription] = useState('Holinova Technology Ltd., established in Vancouver, recently initiated an innovative project to develop a cloud-based platform named Digital Transformation Factory (DXF) to help domestic and global SMB clients to accelerate implementation of cloud-based ERP and extended Industrial IoT while keep the total cost of ownership (TCO) at affordable level, the technology stack essential to the success of this project, consists of codeless programming, AI enabled automated code generation, integrated DevOps, automated test and deployment, hyper converged cloud infrastructure, docker based application hosting, software defined wide area network, and device virtualization. We are looking for a full-time Senior Software Engineer to join our DXF R/D team.')
    const [joblink, setJobLink] = useState('')
    const {jobpost, error, isLoading} = useJobpost()
    // const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await jobpost(company , location, position, startdate, employmenttype, board, description ,joblink)

        setformVisibility(false);
        setTimeout(() => {
            props.setTrigger(false)
        },2000)
    }
    
    // useEffect( () => {
    //     if(jobpost) {
    //       setTimeout(() => {
    //          navigate('/dashboard')
    //       }, 3000)
    //     }
    //   }, [jobpost, navigate])

  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
        {/* <h1 className='JobPopupTitle'>Add New Job Post</h1> */}
        { 
            formVisibility && <>
                <h1 className='JobPopupTitle'>Add New Job Post</h1>
                <form className="JobBoardFormSection" onSubmit={handleSubmit}>
                    <div className="JobBoard-form-group">
                        <div className="fieldgroup">
                            <fieldset>
                                <legend>Company:</legend>
                                <input 
                                    type="text"
                                    onChange={(e) => setCompany(e.target.value)} 
                                    value={company}
                                    required
                                />
                            </fieldset>
                            <fieldset>
                                <legend>Location:</legend>
                                <input 
                                    type="text"
                                    onChange={(e) => setLocation(e.target.value)} 
                                    value={location}
                                    required
                                />
                            </fieldset>
                        </div>
                        <div className="fieldgroup">
                            <fieldset>
                                <legend>Position:</legend>
                                <input 
                                    type="text"
                                    onChange={(e) => setPosition(e.target.value)} 
                                    value={position}
                                    required
                                />
                            </fieldset>
                            <fieldset>
                                <legend>Start Date:</legend>
                                <input 
                                    type="date"
                                    onChange={(e) => setStartDate(e.target.value)} 
                                    value={startdate}
                                    required
                                />
                            </fieldset>
                        </div>
                        <div className="fieldgroup">
                            <fieldset>
                            <legend>Employment Type:</legend>
                            <select id="cars" name="cars" onChange={(e) => setEmploymentType(e.target.value)}  value={employmenttype}>
                                <option value="Select">-- Select --</option>
                                <option value="Full-Time">Full-Time Position</option>
                                <option value="Part-Time">Part-Time Position</option>
                                <option value="Contract">Contract Position</option>
                                <option value="wfh">Work From Home</option>
                            </select>
                            </fieldset>
                            <fieldset>
                            <legend>Posted Date:</legend>
                            <select id="cars" name="cars" onChange={(e) => setBoard(e.target.value)} value={board}>
                                <option value="Select">-- Select --</option>
                                <option value="today">Today</option>
                                <option value="1 day">1 day ago</option>
                                <option value="2 day">2 day ago</option>
                                <option value="3 day">3 day ago</option>
                                <option value="4 day">4 day ago</option>
                                <option value="5 day">5 day ago</option>
                                <option value="week">Week ago</option>
                            </select>
                            </fieldset>
                        </div>
                        <div className="fieldgroup">
                            <fieldset className='grid-grow'>
                            <legend>Description:</legend>
                                <textarea rows="4" onChange={(e) => setDescription(e.target.value)} value={description} ></textarea>
                            </fieldset>
                            <fieldset className='grid-grow'>
                            <legend>Job Link:</legend>
                                <input  onChange={(e) => setJobLink(e.target.value)} value={joblink} required />
                            </fieldset>
                        </div>
                        <div className="button-login">
                        <button disabled={isLoading} onClick={() => props.setTrigger(false)} className='Cancel-btn' > Cancel</button>    
                        <button disabled={isLoading} className='Post-btn'> Post</button>
                        </div>
                    {/* <input type="submit" value="Submit"></input> */}
                    </div>
                    {error && <div>{error}</div>}
                </form>
            </>
        }
        { !formVisibility && <div className='success-msg'><img src={success} alt="Success"/><h1>Success</h1></div>}
        
        <button className="close-btn" onClick={() => props.setTrigger(false)}><b>X</b></button>
        </div>
        
    </div>
  ) : "";
}

export default Popup

