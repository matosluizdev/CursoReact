import styles from './Header.module.css'
import intersolidLogo from '../assets/logo.png'
export function Header() {
    return (
        <header className={styles.header}>
        <img src={intersolidLogo} alt="logotipo da intersolid" />
        </header>
    )
}