const Button = ({color, text, onClick, colorText}) => {
  return (
    <button
        onClick = {onClick}
        style = {{backgroundColor: color, color: colorText}}
        className='profile-btn'
    >
        {text}
    </button>
  )
}

export default Button
