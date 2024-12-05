import { servicesData } from "../data/servicesData";
import styles from "./styles/services.module.css";
import Carousel from "./Carousel";
import Image from "next/image";
export default function Services() {
    return (
        <div>
            {servicesData.map((service, index) => (
                <div
                    key={index}
                    className={styles.service_container}
                >
                    <h3 className={styles.service_title}>{service.title}</h3>
                    <Carousel slideOffset={1}>
                        {service.images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                height={200}
                                width={200}
                                alt={service.title}
                            />
                        ))}
                    </Carousel>
                    <p className={styles.service_description}>
                        {service.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
