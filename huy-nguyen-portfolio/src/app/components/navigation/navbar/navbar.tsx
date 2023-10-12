
import styles from '../../../page.module.scss'



const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarBox}>About</div>
            <div className={styles.navbarBox}>Experience</div>
            <div className={styles.navbarBox}>Project</div>
            <div className={styles.navbarBox}>Contact</div>
        </div>
    )
}

export default Navbar;