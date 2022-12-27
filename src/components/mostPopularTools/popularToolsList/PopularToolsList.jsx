import React from 'react';
import styles from '../MostPopularTools.module.css';
import { PopulartoolsItem } from './PopulartoolsItem';

export const PopularToolsList = ({ tools }) => {
  return (
    <ul className={styles.tools__list}>
      {tools.length > 0 &&
        tools.map(({ id, icon, title, paid, content, linked, width }) => <PopulartoolsItem key={id} icon={icon} title={title} paid={paid} content={content} linked={linked} width={width} />)}
    </ul>
  )
}


