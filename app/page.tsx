import styles from "./page.module.css";
import Image from "next/image";
import Hero from "./components/Hero";
<<<<<<< HEAD
import Header from "./components/Header";
=======
import Services from "./components/Services";
>>>>>>> fbe2cea6d7e6c640618754f8203d4df8ab55dc5c

export default function Home() {
    return (
        <div className={styles.page}>
<<<<<<< HEAD
            <Header />
            <h1>test</h1>
            <Hero />
=======
            {/* <Hero /> */}
            <Services />
>>>>>>> fbe2cea6d7e6c640618754f8203d4df8ab55dc5c
        </div>
    )
}
