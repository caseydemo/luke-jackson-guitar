import { ServiceItemProps } from "../types";
/*
  Services
  - private lessons
  - performance
  - composition
  - about
*/

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const blerb = "bla bla bla bla bla";
export const servicesData: ServiceItemProps[] = [
  {
    title: "Private Instruction",
    description: lorem,
    blerb: blerb,
    featured_image: "/luke_hero_image_1.jpg",
    images: [
      "/quartet_superheros.jpg",
      "/luke_and_cat.jpg",
      "/luke_and_old_man.jpg"
    ]
  },
  {
    title: "Performance",
    description: lorem,
    blerb: blerb,
    featured_image: "/luke_hero_image_1.jpg",
    images: [
      "/quartet_superheros.jpg",
      "/luke_and_cat.jpg",
      "/luke_and_old_man.jpg"
    ]
  },
  {
    title: "Composition",
    description: lorem,
    blerb: blerb,
    featured_image: "/luke_hero_image_1.jpg",
    images: [
      "/quartet_superheros.jpg",
      "/luke_and_cat.jpg",
      "/luke_and_old_man.jpg"
    ]
  },
  {
    title: "About Luke",
    description: lorem,
    blerb: blerb,
    featured_image: "/luke_hero_image_1.jpg",
    images: [
      "/quartet_superheros.jpg",
      "/luke_and_cat.jpg",
      "/luke_and_old_man.jpg"
    ]
  },
];
