import React, { useState  } from 'react'
import { useJobpost } from "../hooks/useJobpost"
import { useNavigate } from 'react-router-dom'
//import { Link } from 'react-router-dom'

function Popup(props) {
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
    }
    function redirectToJobPost (){
        navigate('/job-board');
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
                                <option value="volvo">Volvo XC90</option>
                                <option value="saab">Saab 95</option>
                                <option value="mercedes">Mercedes SLK</option>
                                <option value="audi">Audi TT</option>
                            </select>
                            </fieldset>
                            <fieldset>
                            <legend>Board:</legend>
                            <select id="cars" name="cars" onChange={(e) => setBoard(e.target.value)} value={board}>
                                <option value="volvo">Volvo XC90</option>
                                <option value="saab">Saab 95</option>
                                <option value="mercedes">Mercedes SLK</option>
                                <option value="audi">Audi TT</option>
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
                        <button disabled={isLoading} onClick={redirectToJobPost} > Save Job</button>
                        </div>
                    {/* <input type="submit" value="Submit"></input> */}
                    </div>
                    {error && <div>{error}</div>}
                </form>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
        </div>
        
    </div>
  ) : "";
}

export default Popup

