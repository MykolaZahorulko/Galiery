import React from 'react';
import styles from './Select.module.scss';

const Select = ({ name, options, defaultValue, ...props}) => {
  return (
    <select {...props} name={name}>
      <option value="" hidden>
        {defaultValue}
      </option>
      {options.map((option, id) => (
        <option key={id} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;

