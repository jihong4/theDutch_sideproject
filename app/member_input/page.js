// app/member_input/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/member_input.module.css';
import Modal from '../components/Modal';

const Member_in = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push('/');
  };

  return (
    <div className={styles.container}>
      {/* 로고 링크 */}
      <Link href="/" className={styles.logoLink}>
        <img src="/images/logo_ver2.jpg" alt="Logo" className={styles.logo} />
      </Link>
      <div className={styles.content}>
        <h1>this is member add page</h1>
      </div>
      <div className={styles.addlocation}>
        <button className={styles.addbutton} onClick={openModal}>
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

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Hello, World!</h2>
        </Modal>
      </div>
    </div>
  );
};

export default Member_in;