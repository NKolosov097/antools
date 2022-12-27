import React from 'react';
import styles from '../MostPopularTools.module.css';
import styled from 'styled-components';
import {AiOutlineFolderAdd} from 'react-icons/ai';

export const PopulartoolsItem = ({ id, icon, title, paid, content, linked, width }) => {
    const Item = styled.li`
        width: ${width || '31%'};
    `;

  return (
    <Item className={styles.tools__item}>
            <div className={styles.tools__item__top}>
                <div className={styles.tools__item__icon}>{icon}</div>
                <div>
                    <h4 className={styles.tools__item__title}>{title}</h4>
                    <h5 className={styles.tools__item__paid}>{paid}</h5>
                </div>
            </div>
            <div className={styles.tools__item__content}>{content}</div>
            <div className={styles.tools__item__footer}>
                <div className={styles.footer__left}>
                    <span className={styles.like}>
                        <svg width="21" height="18" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8334 0.25C16.3834 0.25 14.225 1.475 13 3.4C11.775 1.475 9.61669 0.25 7.16669 0.25C3.31669 0.25 0.166687 3.4 0.166687 7.25C0.166687 14.1917 13 21.25 13 21.25C13 21.25 25.8334 14.25 25.8334 7.25C25.8334 3.4 22.6834 0.25 18.8334 0.25Z" fill="white" fill-opacity="0.38"/>
                        </svg>
                    </span>
                    <AiOutlineFolderAdd className={styles.folder} size={40} />
                </div>
                <button className={styles.footer__right}>Visit</button>
            </div>
    </Item>
  )
}

