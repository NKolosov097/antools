import React from 'react';
import styles from './Contributor.module.css';

export const Contributor = () => {
  return (
    <section className={styles.contributor__container}>
        <h2 className={styles.contributor__h2}>Become a contributor?</h2>
        <h3 className={styles.contributor__h3}>Join us and get tips & tricks to become a great Designer and Developer</h3>
        <div className={styles.form}>
            <form className={styles.contributor__form}>
                <label className={styles.contributor__label}>
                    <input className={styles.contributor__input} type="text" name='find' placeholder='Enter your email...' />
                    <button className={styles.contributor__button}>Join Us</button>
                </label>
            </form>
        </div>
    </section>
  )
}
