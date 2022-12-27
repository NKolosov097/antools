import React from 'react';
import styles from './Staff.module.css'

export const Staff = () => {
  return (
    <section className={styles.staff__container}>
        <span className={styles.slider__left}>
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="100" rx="8" fill="#1E252B"/>
                <path d="M46 62L34 50L46 38" stroke="white" stroke-opacity="0.28" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        <div className={styles.staff}>
            <div className={styles.photo}>
                <div className={styles.namePos}>
                    <span className={styles.fullName}>Ronald Richards</span>
                    <span className={styles.post}>Product Manager</span>
                </div>
            </div>
            <div className={styles.staff__description}>
                <div className={styles.description__content}>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
                </div>
            </div>
        </div>
        <span className={styles.slider__right}>
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="100" rx="8" transform="matrix(-1 0 0 1 80 0)" fill="#1E252B"/>
                <path d="M35 62L47 50L35 38" stroke="#FF6E30" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </section>
  )
}
