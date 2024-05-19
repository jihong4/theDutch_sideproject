import React from 'react';
import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
      </div>
      <button className={styles.startButton}>START</button>
    </div>
  );
};

export default Home;