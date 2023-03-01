import { useState } from 'react';

function InputField(props) {
  const {
    onBlure,
    touched,
    className,
    error,
    onChange,
    values,
    index,
    type,
    label,
    formpopup,
    workshopTitle,
  } = props;

  const defaultContent = () => {
    if (formpopup && type === 'subject') {
      return workshopTitle;
    }
    if (formpopup && type === 'message') {
      return `I'm interested i this Workshop! `;
    }
    return values;
  };

  return (
    <>
      <label htmlFor={type}>{label}</label>
      <input
        className={error[type] && touched ? className : ''}
        onBlur={onBlure}
        onChange={onChange}
        value={defaultContent()}
        id={type}
        key={index}
        type={type}
        placeholder={label}
      ></input>
      {error[type] && touched && <p className="error">{error[type]}</p>}
    </>
  );
}

export default InputField;
