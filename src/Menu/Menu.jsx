import styles from '../Menu/Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <header className={styles.header}>
            <span>LOGO</span>

            <nav className={styles.nav}>
                <Link to='/Portfolio/'>Inicio</Link>
                <Link to='/Portfolio/proyectos'>Proyectos</Link>
                <Link to='/Portfolio/sobremi'>SobreMi</Link>
            </nav>
        </header>
    )
}

export default Menu;