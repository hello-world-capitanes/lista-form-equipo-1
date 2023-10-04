import './index.css'

function Button({className, text, children, onClick}) {
  return (
    <div className='button-container'>
     <button onClick={onClick} className={className}>{children ? children : text}</button>
    </div>
  )
}

export default Button