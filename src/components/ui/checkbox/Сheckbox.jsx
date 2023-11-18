import React, {useState} from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = ({children, className, ...props}) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <label className={className} {...props}>
            <input
                type="checkbox"
                className={styles.input_checkbox}
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
            />
            <div className={styles.input_fake}></div>
            <p className={`${styles.input_text} ${isChecked ? styles.checkedText : ''} ${styles.label_text}`}>{children}</p>
        </label>
    );
};

export default Checkbox;
