import React, { FC } from 'react'
import styles from './Header.module.scss'

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className={styles.header + " " + props.className}>
      <div className={styles.logo}>
        <img src="./image/main_logo.png" alt="main_logo" />
      </div>
    </div>
  )
}

export default Header