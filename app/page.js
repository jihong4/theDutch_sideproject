import React from 'react';
import styles from './styles/Home.module.css';
import global from './globals.css';
import Link from 'next/link'; 
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/images/logo_Ver2.jpg" alt="Logo" className={styles.logo} />
      </div>
     <Link href = "/member_input">     
      
      </Link>
  </div>
  );
};

export default Home;