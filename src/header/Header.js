import MainNavigation from "./MainNavigation";
import Logo from "./Logo";
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <MainNavigation />
        </header>
    );
}

export default Header;