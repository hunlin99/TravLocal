"use client";

import Link from "next/link";
import styles from "./Nav.module.css";

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.link}>Home page</Link>
        </li>
        <li className={styles.item}>
          <Link href="#" className={styles.link}>Our Team</Link>
        </li>
        <li className={styles.item}>
          <Link href="/contact" className={styles.link}>Issue Report</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
