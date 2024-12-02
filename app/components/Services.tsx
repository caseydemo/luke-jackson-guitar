"use client";
import { useEffect, useRef } from "react";
// import Glide from "../../node_modules/@glidejs/glide/dist/glide.modular.esm";
import Glide from "@glidejs/glide"
import { servicesData } from "../data/servicesData";
import Service from "./Service";

export default function Services() {

  const sliderRef = useRef(null);

  useEffect(() => {
      new Glide('.glide', {
        // Glide.js options here
        type: 'carousel',
        perView: 3,
        autoplay: 3000,
      }).mount();
    
  }, []);


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
