import { UseAppContext } from "../context/appContext"

const Alert = () => {
  const { alertType, alertText } = UseAppContext() 

  return (
    <div>{alertText}</div>
  )
}
export default Alert