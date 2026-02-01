 const Field = (props) => {
  const { 
    className = '',
    id,
    type = 'text',
    label,
    onInput,
    value
  } = props
  return (
    <div className={`field ${className}`}>
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        type={type}
        placeholder=''
        autoComplete="off"
        onInput={onInput}
        value={value}
      />
    </div>
  )
}

export default Field