import { useState, useEffect } from 'react'
import { FormRow, Alert } from '../components'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: true
}


const Register = () => {
  const [values, setValues] = useState(initialState)

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    //  Logo Here
    <div>
      <form className='register-form' onSubmit={onSubmit}>
          <h3>{values.isMember ? 'Welcome to Nexum' : 'Create Your Account'}</h3>
          {!values.isMember && <p>Please insert your information and the password that was sent to you</p>}
          {values.showAlert && <Alert />}
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

          <button type='submit'>
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
