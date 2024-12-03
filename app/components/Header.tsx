import styles from "./header.module.css";
export default function Header() {
    return (        
        <header className={styles.header}>
            <a href='#default' className={styles.logo}>
                CompanyLogo
            </a>
            <div className={styles.headerRight}>
                <a href='#home'>
                    Home
                </a>
                <a href='#about'>
                    About
                </a>
                <a href='#music'>
                    Music
                </a>
            </div>
        </header>
    );
}
