import styles from "./page.module.css";
import Hero from "./components/Hero";
import Services from "./components/Services";


export default function Home() {
    return (
        <div className={styles.page}>
            <Services />
            {/* <Hero /> */}
        </div>
    )
}
