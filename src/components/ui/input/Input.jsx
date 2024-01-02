import React from 'react';
import styles from './Input.module.scss'
const Input = ({className, ...props}) => {
  return (
    <input {...props} className={className} />
  );
};

export default Input;
