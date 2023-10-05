import './Input.css';

function Input({ type = 'text', setValue, value }) {
  function handleChange(event) {
    if (type == 'text') {
      setValue(event.target.value);
    } else {
      setValue(event.target.checked);
    }
  }
  return (
    <div>
      <input
        className="input"
        type={type}
        onChange={handleChange}
        checked={type === 'checkbox' ? undefined : null}
        value={value}
      />
    </div>
  );
}
export default Input;
