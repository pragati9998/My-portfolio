import Link from 'next/link';
import styles from "@/components/NavBar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About Me</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;