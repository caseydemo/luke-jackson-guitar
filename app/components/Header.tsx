<<<<<<< HEAD
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
=======
export default function Header() {
    return (
        <h1>This is the Header</h1>
    )
}
>>>>>>> fbe2cea6d7e6c640618754f8203d4df8ab55dc5c
