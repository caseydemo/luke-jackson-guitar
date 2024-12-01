// @ts-nocheck
import { ServiceItemProps } from "../types";
import Service from "./Service";

const servicesData: ServiceItemProps[] = [
  {
    title: "section 1",
    key: "test",
    value: "test",
  },
  {
    title: "section 2",
    key: "test",
    value: "test",
  },
  {
    title: "section 3",
    key: "test",
    value: "test",
  },
  {
    title: "section 4",
    key: "test",
    value: "test",
  },
];

export default function Services() {
  return (
    <div className="services">
        {servicesData.map((value, index) => {
            return (
                // <div>donkey</div>
                <Service key={index} props={value} />
            )
            // console.log('test')
        })}
    </div>
  );
}
