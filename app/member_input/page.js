import React from 'react';
import Link from 'next/link';
import styles from '../styles/member_input.module.css';

const Member_in = () => {
  return (
    <div className={styles.container}>
      {/* 로고 링크 */}
      <Link href="/" className={styles.logoLink}>
        <img src="/images/logo_ver2.jpg" alt="Logo" className={styles.logo} />
      </Link>

      <div className={styles.content}>
        <h1>Next Page</h1>
        <p>This is the next page content.</p>
      </div>
    </div>
  );
};

export default Member_in;