import styles from "./page.module.css";
import Image from "next/image";
import Hero from "./components/Hero";
import Header from "./components/Header";

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />
            <Hero />
        </div>
    )
}
