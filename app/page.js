import React from 'react';
import styles from './styles/Home.module.css';

import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/images/logo_Ver2.jpg" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.startlocation}>
        <Link href="/member_input" className={styles.startbutton}>
        <button className={styles.startbutton}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    width={24}
    height={24}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.24 3.01l5.51 5.51-.01.01V20h-4V9h-8V5h8V3.01zM6.67 3l5 5H5v14h14v-6.67l4 4V3H6.67z"
    />
  </svg>
  <span>START</span>
</button>

        </Link>
      </div>
    </div>
  );
};

export default Home;