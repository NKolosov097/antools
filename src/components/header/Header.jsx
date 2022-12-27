import React from 'react';
import { AntoolsButton } from './AntoolsButton';
import styles from './Header.module.css';

export const Header = () => {

  return (
    <header className={styles.header}>
        <AntoolsButton />
        <nav className={styles.nav}>
            <ul className={styles.nav__ul}>
                <li className={styles.nav__li}>
                    {/* <Link to='/'>Home</Link> */}
                    Home
                </li>
                <li className={styles.nav__li}>Categories</li>
                <li className={styles.nav__li}>My collections</li>
                <li className={styles.nav__li}>Blog</li>
            </ul>
        </nav>
        <div className={styles.authorization}>
            <button className={styles.login}>Login</button>
            <button className={styles.signUp}>Sign Up</button>
        </div>  
    </header>
  )
}
