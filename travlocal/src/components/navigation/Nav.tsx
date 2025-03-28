import styles from "./Nav.module.css"; // Import styles

const Nav: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}><a className={styles.link}>Home page</a></li>
                <li className={styles.item}><a className={styles.link}>Our Team</a></li>
                <li className={styles.item}><a className={styles.link}>Issue Report</a></li>
            </ul>
        </nav>
    );
};

export default Nav;