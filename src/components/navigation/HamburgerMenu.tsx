import styles from "./Nav.module.css"; // Import correctly

const HamburgerMenu: React.FC = () => {
    return (
        <>
            <input type="checkbox" id="navi-toggle" className={styles.checkbox} />
            <label htmlFor="navi-toggle" className={styles.button}>
                <span className={styles.icon}>&nbsp;</span>
            </label>
            <div className={styles.background}>&nbsp;</div>
        </>
    );
};

export default HamburgerMenu;