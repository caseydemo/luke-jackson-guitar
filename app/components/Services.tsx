import { servicesData } from "../data/servicesData";
import Carousel from "./Carousel";
import Image from "next/image";
export default function Services() {
  return (
    <div>
      {servicesData.map((service, index) => (
        <div key={index} className="service">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
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
        </div>
      ))}
    </div>
  );
}
