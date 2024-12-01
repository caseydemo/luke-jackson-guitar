// @ts-nocheck
import { ServiceItemProps } from "../types";
import Service from "./Service";

const servicesData: ServiceItemProps[] = [
  {
    title: "about",
    description: "stuff about luke jackson",
    featured_image: "this is the main image",
    images: [],
  },
  {
    title: "lessons",
    description: "stuff about lessons",
    featured_image: "test",
    images: [],
  },
  {
    title: "composition",
    description: "stuff about compositions",
    featured_image: "test",
    images: [],
  },
  {
    title: "performance",
    description: "examples of this dinguses' performances",
    featured_image: "test",
    images: [],
  },
];

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
