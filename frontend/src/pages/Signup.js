import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import LogoIcon from '../assets/nexum_logo.png'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const {signup, error, isLoading} = useSignup()
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password, name)
    }

    return (
        <>
        <div className="main-signup">
            <div className="logo-area">
        <img className="signup-logo"src={LogoIcon} alt="Logo" />
        </div>
        <form className="formSection" onSubmit={handleSubmit}>
            <div className="form-group">
            <h1 className="signUpHeader">Create Your Account</h1>
            <span>Please insert your information and the password it was sent to you.</span>
            <fieldset>
            <legend>Name:</legend>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)} 
                value={name}
            />
             </fieldset>
            <fieldset>
            <legend>Email:</legend>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
            />
            </fieldset>
            
            <fieldset>
            <legend>Password:</legend>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
            />
            </fieldset>
            <fieldset>
            <legend>Confirm Password:</legend>
            <input 
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)} 
                value={confirmPassword}
            />
            </fieldset>

            <button disabled={isLoading}>Sign up</button>
            <h2 className="signupFollowUp"><span>Or</span></h2>
            <p className="signUpHeader">Already have an account? <b>login</b></p>
            {error && <div>{error}</div>}
            </div>
        </form>
        </div>
        </>
    )
}

export default Signup