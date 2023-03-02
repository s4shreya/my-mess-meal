import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

function Logo() {
    return (
        <div className={styles.logo}>
            {/* <img src={"./logo.jpg"} alt='logo' /> */}
            <Link to='/' className={styles.image}>LOGO</Link>
                <Link to='/' className={styles.name}>My Mess Meal</Link>
        </div>
    );
}

export default Logo;