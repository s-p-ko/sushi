import React from 'react';
import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>SUSHI</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt='Sushi meals' />
      </div>
    </>
  );
};

export default Header;
