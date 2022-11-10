import React, { useState  } from 'react'
import { useJobpost } from "../hooks/useJobpost"
import { useNavigate } from 'react-router-dom'
import success from '../assets/success.gif'
//import { Link } from 'react-router-dom'

function Popup(props) {
    const [formVisibility, setformVisibility] = useState(true)
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [position, setPosition] = useState('')
    const [startdate, setStartDate] = useState('')
    const [employmenttype, setEmploymentType] = useState('')
    const [board, setBoard] = useState('')
    const [description, setDescription] = useState('')
    const [joblink, setJobLink] = useState('')
    const {jobpost, error, isLoading} = useJobpost()
    const navigate = useNavigate()

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
                                />
                            </fieldset>
                            <fieldset>
                                <legend>Location:</legend>
                                <input 
                                    type="text"
                                    onChange={(e) => setLocation(e.target.value)} 
                                    value={location}
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
                                />
                            </fieldset>
                            <fieldset>
                                <legend>Start Date:</legend>
                                <input 
                                    type="date"
                                    onChange={(e) => setStartDate(e.target.value)} 
                                    value={startdate}
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
                            <legend>Board:</legend>
                            <select id="cars" name="cars" onChange={(e) => setBoard(e.target.value)} value={board}>
                                <option value="Select">-- Select --</option>
                                <option value="today">Today</option>
                                <option value="1day">1 day ago</option>
                                <option value="2day">2 day ago</option>
                                <option value="3day">3 day ago</option>
                                <option value="4day">4 day ago</option>
                                <option value="5day">5 day ago</option>
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
                                <input  onChange={(e) => setJobLink(e.target.value)} value={joblink} />
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
        { !formVisibility && <div className='success-msg'><img src={success}/><h1>Success</h1></div>}
        
        <button className="close-btn" onClick={() => props.setTrigger(false)}><b>X</b></button>
        </div>
        
    </div>
  ) : "";
}

export default Popup

