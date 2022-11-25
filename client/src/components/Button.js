const Button = ({color, text, onClick}) => {
  return (
    <button
        onClick = {onClick}
        style = {{backgroundColor: color}}
        className='profile-btn'
    >
        {text}
    </button>
  )
}

export default Button
