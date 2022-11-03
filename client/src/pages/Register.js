import { useState, useEffect } from 'react'

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
     <form className='register-form' onSubmit={onSubmit}>
        <h3>Login</h3>
        {/* Name field */}

        <div className='form-row'>

          <label htmlFor="name" className='form-label'>
            Name
          </label>
          <input  
            type='text'
            value={values.name}
            name='name'
            onChange={handleChange}
            className='form-input'
          />

        </div>
     </form>
  )
}

export default Register
