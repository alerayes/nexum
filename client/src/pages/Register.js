import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormRow, Alert, Logo } from '../components'
import { UseAppContext } from '../context/appContext'

const initialState = {
    status: '',
    name: '',
    email: '',
    password: '',
    lastName: '',
    status: 'student',
    statusOptions: ['student', 'alumni', 'admin'],
    program: '',
    phoneNumber: '',
    isMember: true,
}


const Register = () => {
  const [values, setValues] = useState(initialState)
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } = UseAppContext()
  const navigate = useNavigate()

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    const { name, email, password, isMember, lastName, program, phoneNumber, status } = values

    if(!email || !password || (!isMember && (!name || !lastName || !program || !phoneNumber || !status))){
      displayAlert() 
      return
    }
    const currentUser = {name, email, password, lastName, program, phoneNumber, status}

    if(isMember){
      loginUser(currentUser)
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
    
    <div className='register-main-container'>
      <Logo />
      <form className='register-form' onSubmit={onSubmit}>
          <h3 className='register-header'>{values.isMember ? 'Welcome to Nexum' : 'Create Your Account'}</h3>
          {!values.isMember && <p>Please insert your information and the password that was sent to you</p>}
          {showAlert && <Alert />}
          {/* Name Input */}
          
          <div className="form-group">
          { !values.isMember && (
            <div className="">
              <label htmlFor="stauts" className='form-label'>
                Register As:
              </label>
              <select
                 name='status' 
                 value={values.status}
                 onChange={handleChange}
                 className='form-select'
              >
                {
                  values.statusOptions.map((itemValue, index) => {
                    return (
                      <option key={index} value={itemValue}>
                        {itemValue}
                      </option>
                    )
                  })
                }
              </select>
            </div>
            )}

            { !values.isMember && (
              <FormRow
              type='text'
              name='name'
              value={values.name}
              handleChange={handleChange}
            />
            )}
            { !values.isMember && (
              <FormRow
              type='text'
              name='lastName'
              labelText='last name'
              value={values.lastName}
              handleChange={handleChange}
            />
            )}
            { !values.isMember && (
              <FormRow
              type='text'
              name='phoneNumber'
              labelText='phone number'
              value={values.phoneNumber}
              handleChange={handleChange}
            />
            )}
            { !values.isMember && (
              <FormRow
              type='text'
              name='program'
              value={values.program}
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
            <div className="register-button-wrapper">
              <button className='button-register' type='submit' disabled={isLoading}>
                {values.isMember ? 'Login' : 'Sign Up'}
              </button>
            </div>
            
            <p>{values.isMember && 'Forgot your password?'}</p>

            <p>
              {values.isMember ? `Don't have an account yet?` : 'Already have an account?' }
              <button className='register-toggle-button' type='button' onClick={toggleMember}>
                {values.isMember ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
      </form>
    </div> 
    
  )
}

export default Register
