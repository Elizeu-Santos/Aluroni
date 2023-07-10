import styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>Welcome to the Restaurant

                </div>
            </header>
        </main>
    )
}