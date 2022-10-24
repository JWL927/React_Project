import ColoredLine from "../js/HrLine";
import styles from "../css/Nav.module.css"
import image from "../img/logo.png"

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <div>
                <img src={image} alt="logo" width="134px"/>
            </div>
            <ColoredLine color="black" />
            <ul className={styles.menubar}>
                <li>Home</li>
                <li>My Movie</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default Navigation;