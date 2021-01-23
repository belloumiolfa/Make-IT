import React from 'react';

export default function InputText(type, name, onChange, value, ...rest) {
  return (
    <div>
      <input
        name={name}
        type={type}
        value={value}
        onChange={event => {
          event.preventDefault();
          onChange(name, event.target.value);
        }}
        {...rest}
      />
      <div className="validate"></div>
    </div>
  );
}
