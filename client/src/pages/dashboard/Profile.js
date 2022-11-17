import { useState } from 'react'
import { FormRow, Alert } from '../../components'
import { UseAppContext } from '../../context/appContext'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } = UseAppContext()

  const [ name, setName ] = useState(user?.name)
  const [ email, setEmail ] = useState(user?.email)
  const [ lastName, setLastName ] = useState(user?.lastName)
  const [ program, setProgram ] = useState(user?.program)
  const [ linkedInProfile, setLinkedInProfile ] = useState(user?.linkedInProfile)
  const [ phoneNumber, setPhoneNumber ] = useState(user?.phoneNumber)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if( !name || !email || !lastName || !program || !linkedInProfile || !phoneNumber){
      displayAlert()
      return
    }
    
    updateUser({name, email, lastName, program, linkedInProfile, phoneNumber})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Profile</h2>
        {showAlert && <Alert />}
        <div>
          <FormRow 
            type='text'
            labelText= 'name'
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
            handleChange={(e) => setPhoneNumber(e.target.value)}
          />
          <FormRow 
            type='text'
            labelText='program'
            name='program'
            value={program}
            handleChange={(e) => setProgram(e.target.value)}
          />
          <FormRow 
            type='url'
            labelText='LinkedIn Profile'
            name='linkedInProfile'
            value={linkedInProfile}
            handleChange={(e) => setLinkedInProfile(e.target.value)}
          />
          <button
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Please wait... ' : 'Save changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
