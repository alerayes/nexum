import { useState, useEffect } from 'react'
import { FormRow } from '../components'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}


const Register = () => {
  const [values, setValues] = useState(initialState)

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
          <h3>Login</h3>
          {/* Name Input */}
          <FormRow 
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />

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
      </form>
    </div>  
  )
}

export default Register
