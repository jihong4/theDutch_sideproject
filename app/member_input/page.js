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
      <h1>this is member add page</h1>
    </div>
<div className={styles.addlocation} >
  <Link href="/input_info" >
    <button className={styles.addbutton}>
       <svg
         xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
         width={24}
        height={24}
        fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
    </svg>
    <span>Add</span>
  </button>
  </Link>
 

</div>
</div>
  
  );
};

export default Member_in;