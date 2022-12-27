import React from 'react';
import { AntoolsButton } from '../header/AntoolsButton';
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer}>
        <div className={styles.description}>
          <AntoolsButton />
          <span className={styles.copyright}>Copyright 2021. Antools</span>
          <span className={styles.content}>Antool is a web collection of information on paid or free Design and Development tools</span>
        </div>

        <div className={styles.contactUs}>
          <address className={styles.addres}>
            <h2 className={styles.footer__h2}>Contact Us</h2>
            <a className={styles.tel} href="tel:+621987463">+621987463</a>
            <span className={styles.street}>M Building, No.10 A</span>
            <a className={styles.mail} href='mailto:antools@awesome.com'>antools@awesome.com</a>
          </address>
        </div>

        <div className={styles.categories}>
          <div>
            <h2 className={styles.footer__h2}>Categories</h2>
            <button className={styles.button}>Design</button>
            <button className={styles.button}>Development</button>
          </div>
        </div>

        <div className={styles.companyInfo}>
          <div>
            <h2 className={styles.footer__h2}>Company Info</h2>
            <button className={styles.button}>About Us</button>
            <button className={styles.button}>Our Partners</button>
            <button className={styles.button}>Blog</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
