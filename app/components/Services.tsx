// @ts-nocheck
import { servicesData } from "../data/servicesData";
import Service from "./Service";

export default function Services() {
  return (
    <div className="services">
      {servicesData.map((value, index) => {
        return (
          <Service key={index} props={value} />
        );
      })}
    </div>
  );
}
