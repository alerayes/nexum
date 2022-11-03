import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormRow, Alert } from '../components'
import { UseAppContext } from '../context/appContext'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}


const Register = () => {
  const [values, setValues] = useState(initialState)
  const { user, isLoading, showAlert, displayAlert, registerUser } = UseAppContext()
  const navigate = useNavigate()

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    const { name, email, password, isMember } = values

    if(!email || !password || (!isMember && !name)){
      displayAlert() 
      return
    }
    const currentUser = {name, email, password}

    if(isMember){
      console.log('already a member')
    }
    else{
      registerUser(currentUser)
    }

    console.log(values)
  }

  useEffect( () => {
    if(user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    //  Logo Here
    <div>
      <form className='register-form' onSubmit={onSubmit}>
          <h3>{values.isMember ? 'Welcome to Nexum' : 'Create Your Account'}</h3>
          {!values.isMember && <p>Please insert your information and the password that was sent to you</p>}
          {showAlert && <Alert />}
          {/* Name Input */}
          
          { !values.isMember && (
            <FormRow 
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
          )}

          {/* Email Input */}
          <FormRow 
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />

          {/* Password Input */}
          <FormRow
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />

          <button type='submit' disabled={isLoading}>
            Submit
          </button>

          <p>
            {values.isMember ? `Don't have an account yet?` : 'Already have an account?' }

            <button type='button' onClick={toggleMember}>
              {values.isMember ? 'Sign Up' : 'Login'}
            </button>
          </p>
      </form>
    </div>  
  )
}

export default Register
