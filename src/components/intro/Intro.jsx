import React from 'react';
import styles from './Intro.module.css';
import {FiSearch} from 'react-icons/fi';
import {ImFacebook} from 'react-icons/im';
import {SiInstagram} from 'react-icons/si';
import {BsTwitter} from 'react-icons/bs';

export const Intro = () => {
  return (
    <section className={styles.intro}>
        <div className={styles.intro__tools}>
            <h1 className={styles.intro__title}>Awesome tools for Designer & Developer</h1>
            <div className={styles.intro__content}>Antool is a web collection of information on paid or free Design and Development tools</div>
            <form className={styles.itrno__form}>
                <label className={styles.intro__label}>
                    <input className={styles.intro__input} type="text" name='find' placeholder='find more than 430+ tools...' />
                    <button className={styles.intro__button}>Search</button>
                    <FiSearch className={styles.intro__icon} size={20}/>
                </label>
            </form>
            <div className={styles.intro__social}>
                <ImFacebook className={styles.social__icon} size={25} />
                <SiInstagram className={styles.social__icon} size={25} />
                <BsTwitter className={styles.social__icon} size={25} />
            </div>
        </div>
    </section>
  )
}
