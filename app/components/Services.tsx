import { servicesData } from "../data/servicesData"
import Carousel from "./Carousel"
export default function Services() {
    
    return (
        <div>
            {
                servicesData.map((service, index) => (
                    <div key={index} className="service">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <Carousel slideOffset={1} >
                            {
                                service.images.map((image, index) => (
                                    <img key={index} src={image} alt={service.title} />
                                ))
                            }
                        </Carousel>
                    </div>
                ))
            }
        </div>
    )
}