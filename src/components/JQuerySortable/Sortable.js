import React, { useEffect } from 'react';
import styles from './Sortable.module.scss';
import $ from 'jquery';

export const Sortable = () => {
  // useEffect(() => {

  // }, []);
  const ss = document.getElementById('sortable');
  console.log(ss);
  const d = () => {
    $(function () {
      $(ss).sortable();
    });
  };
  return (
    <ul className={styles.list} id="sortable" onDrag={d}>
      <li className={styles.item} onDragStart={d}>
        <p>1</p>
      </li>
      <li className={styles.item} onDragStart={d}>
        <p>2</p>
      </li>
      <li className={styles.item} onDragStart={d}>
        <p>3</p>
      </li>
      <li className={styles.item} onDragStart={d}>
        <p>4</p>
      </li>
    </ul>
  );
};
