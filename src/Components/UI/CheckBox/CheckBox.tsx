import React, { FC } from 'react'
import styles from './CheckBox.module.scss'

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBox: FC<CheckboxProps> = ({ label, checked, onChange }) => {

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.input}
      />
      <span className={styles.checkmark}></span>
      {label}
    </label>
  )
}

export default CheckBox