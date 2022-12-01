import { UseAppContext } from "../context/appContext"

const Alert = () => {
  const { alertType, alertText } = UseAppContext() 

  return (
    <div className={`alert alert-${alertType}`}>{alertText}</div>
  )
}
export default Alert