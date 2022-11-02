// import { useState, useEffect } from "react"
// import LogoIcon from '../assets/nexum_logo_white.png'
// import { Link } from 'react-router-dom'
// //import StudentDashboard from '../pages/StudentDashboard'

// const Login = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')



//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         console.log(email, password)
//     }

//     return (
//         <>
//         <div className="main-signup">
//         <div className="logo-area">
//                 <img className="signup-logo"src={LogoIcon} alt="Logo" />
//             </div>
//         <form className="formSection-login" onSubmit={handleSubmit}>
//         <div className="form-group">
//         <h1 className="signUpHeader">Welcome to Nexum</h1>

//             <fieldset>
//             <legend>Email:</legend>
//             <input 
//                 type="email"
//                 onChange={(e) => setEmail(e.target.value)} 
//                 value={email}
//             />
//             </fieldset>
            
//             <fieldset>
//             <legend>Password:</legend>
//             <input 
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)} 
//                 value={password}
//             />
//             </fieldset>
//             <div className="button-login">    
//                 <button><b>Login</b></button>
//             </div>  
//             <h2 className="signupFollowUp"><span>Or</span></h2>
//             <p className="signUpHeader">Don't have an account? <Link to="/signup"><span className="decoration"><b>Sign Up</b></span></Link></p>
//             </div>
//         </form>
//         </div>
        
//         </>
//     )
// }

// export default Login