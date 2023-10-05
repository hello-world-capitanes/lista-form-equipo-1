import './Input.css';

function Input({ type = 'text', setValue, value }) {
  function handleChange(event) {
    if (type == 'text') {
      setValue(event.target.value);
    } else {
      setValue(event.target.checked);
    }
}
    return(
        <div>
            <input type={type} onChange={handleChange} checked={type === "checkbox" ? value : undefined} value={value}/>
        </div>
    
    )

}
export default Input;
