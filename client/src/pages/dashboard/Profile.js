import {useState} from 'react'
import {FormRow, Alert, Button} from '../../components'
import {UseAppContext} from '../../context/appContext'

const Profile = () => {
    const {user, showAlert, displayAlert, updateUser, isLoading} = UseAppContext()

    const [name,
        setName] = useState(user
        ?.name)
    const [email,
        setEmail] = useState(user
        ?.email)
    const [lastName,
        setLastName] = useState(user
        ?.lastName)
    const [program,
        setProgram] = useState(user
        ?.program)
    const [linkedInProfile,
        setLinkedInProfile] = useState(user
        ?.linkedInProfile)
    const [phoneNumber,
        setPhoneNumber] = useState(user
        ?.phoneNumber)
    const [status,
        setStatus] = useState(user
        ?.status)
    const [isWorking,
        setIsWorking] = useState(user
        ?.isWorking)
    const [aboutMe,
        setAboutMe] = useState(user
        ?.aboutMe)
    const [jobTitle,
        setJobTitle] = useState(user
        ?.jobTitle)
    const [company,
        setCompany] = useState(user
        ?.company)
    const [employmentType,
        setEmploymentType] = useState(user
        ?.employmentType)
    const [yearsOfExperience,
        setYearsOfExperience] = useState(user
        ?.yearsOfExperience)
    const [jobDescription,
        setJobDescription] = useState(user
        ?.jobDescription)

    const [showPersonalInfo,
        setShowPersonalInfo] = useState(true)
    const [showProfessionalExperience,
        setShowProfessionalExperience] = useState(false)

    const statusOptions = ['student', 'alumni']
    const isWorkingOptions = ['I am open to work', 'I am working in my field']
    const employmentTypeOptions = ['Part-Time Position', 'Full-Time Position']

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email || !lastName || !program || !linkedInProfile || !phoneNumber || !status) {
            displayAlert()
            return
        }

        updateUser({
            name,
            email,
            lastName,
            program,
            linkedInProfile,
            phoneNumber,
            status,
            isWorking,
            aboutMe,
            jobTitle,
            company,
            employmentType,
            yearsOfExperience,
            jobDescription
        })
    }

    return (
        <div className='profile-page-container'>

            <h2 className='profile-h2'>Personal Information</h2>
            <div className='profile-btns-container'>
                <Button
                    text={'Personal Information'}
                    onClick={() => {
                    setShowPersonalInfo(!showPersonalInfo)
                    setShowProfessionalExperience(!showProfessionalExperience)
                }}
                    color={showPersonalInfo
                    ? '#2A3950'
                    : '#D9E7E7'}
                    colorText={showPersonalInfo
                    ? 'white'
                    : '#2A3950'}
                    disabled={showProfessionalExperience}/>
                <Button
                    text={'Professional Experience'}
                    onClick={() => {
                    setShowProfessionalExperience(!showProfessionalExperience)
                    setShowPersonalInfo(!showPersonalInfo)
                }}
                    color={showProfessionalExperience
                    ? '#2A3950'
                    : '#D9E7E7'}
                    colorText={showProfessionalExperience
                    ? 'white'
                    : '#2A3950'}
                    disabled={showPersonalInfo}/>
                <Button text={'Job Searching'}/>

            </div>

            <form onSubmit={handleSubmit}>

                <div
                    className={`form-personal-info-${showPersonalInfo
                    ? 'show'
                    : 'hide'}`}>
      
                    

                    <div className='form-personal-info-main-container'>
                        <div className="form-profile-grid-container">
                          <div className="form-personal-info-child-1">
                            <div className="form-select-container">
                                <label htmlFor="stauts" className='form-label'>
                                    Status:
                                </label>
                                <select
                                    name='status'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className='form-select'>
                                    {statusOptions.map((itemValue, index) => {
                                        return (
                                            <option key={index} value={itemValue}>
                                                {itemValue}
                                            </option>
                                        )
                                    })
                            }
                                </select>
                            </div>
                            <FormRow
                                type='text'
                                labelText='name'
                                name='name'
                                value={name}
                                handleChange={(e) => setName(e.target.value)}
                            />
                            <FormRow
                                type='text'
                                labelText='last name'
                                name='lastName'
                                value={lastName}
                                handleChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                          <div className="form-personal-info-child-2">
                            <FormRow
                                type='email'
                                labelText='email'
                                name='email'
                                value={email}
                                handleChange={(e) => setEmail(e.target.value)}
                             />
                            <FormRow
                                type='text'
                                labelText='phone number'
                                name='phoneNumber'
                                value={phoneNumber}
                                handleChange={(e) => setPhoneNumber(e.target.value)}/>
                            <FormRow
                                type='text'
                                labelText='program'
                                name='program'
                                value={program}
                                handleChange={(e) => setProgram(e.target.value)}/>
                          </div>
                        </div>
                        <FormRow
                            type='url'
                            labelText='LinkedIn Profile'
                            name='linkedInProfile'
                            value={linkedInProfile}
                            handleChange={(e) => setLinkedInProfile(e.target.value)}/>
                        <button type='submit' disabled={isLoading} className='profile-form-btn'>
                            {isLoading
                                ? 'Please wait... '
                                : 'Save'}
                        </button>
                    </div>
                </div>

                <div
                    className={`form-professional-experience-${showProfessionalExperience
                    ? 'show'
                    : 'hide'}`}>
                    <h2 className='profile-h2'>Professional Experience</h2>
                    {showAlert && <Alert/>}

                    <div className="form-professional-info-main-container">
                      <div className="form-select-container">
                            <label htmlFor="isWorking" className='form-label'>
                                Work Experience:
                            </label>
                            <select
                                name='isWorking'
                                value={isWorking}
                                onChange={(e) => setIsWorking(e.target.value)}
                                className='form-select'>
                                {isWorkingOptions.map((itemValue, index) => {
                                    return (
                                        <option key={index} value={itemValue}>
                                            {itemValue}
                                        </option>
                                    )
                                })
                        }
                            </select>
                        </div>

                      <div className="form-professional-info-grid-container">
                        <div className="form-professional-info-child-1">
                          <div className='textarea-container'>
                            <label>
                                About Me
                            </label>
                            <textarea
                                name='aboutMe'
                                value={aboutMe}
                                onChange={(e) => setAboutMe(e.target.value)}
                                className='form-textarea'></textarea>
                          </div>
                          <FormRow
                              type='jobTitle'
                              labelText='Job Title'
                              name='jobTitle'
                              value={jobTitle}
                              handleChange={(e) => setJobTitle(e.target.value)}/>
                          <FormRow
                              type='company'
                              labelText='Company'
                              name='company'
                              value={company}
                              handleChange={(e) => setCompany(e.target.value)}/>
                        </div>
                        <div className="form-professional-info-child-2">
                          <div className="form-select-container">
                              <label htmlFor="employmentType" className='form-label'>
                                  Employment Type:
                              </label>
                              <select
                                  name='employmentType'
                                  value={employmentType}
                                  onChange={(e) => setEmploymentType(e.target.value)}
                                  className='form-select'>
                                  {employmentTypeOptions.map((itemValue, index) => {
                                      return (
                                          <option key={index} value={itemValue}>
                                              {itemValue}
                                          </option>
                                      )
                                  })
                          }
                              </select>
                          </div>
                          <FormRow
                              type='yearsOfExperience'
                              labelText='Years Of Experience'
                              name='yearsOfExperience'
                              value={yearsOfExperience}
                              handleChange={(e) => setYearsOfExperience(e.target.value)}/>
                          <div className='textarea-container'>
                              <label>
                                  Job Description
                              </label>
                              <textarea
                                  name='jobDescription'
                                  value={jobDescription}
                                  onChange={(e) => setJobDescription(e.target.value)}
                                  className='form-textarea'></textarea>
                          </div>

                      <button type='submit' disabled={isLoading} className='profile-form-btn-1'>
                          {isLoading
                              ? 'Please wait... '
                              : 'Save changes'}
                      </button>
                      </div>
                      </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Profile
