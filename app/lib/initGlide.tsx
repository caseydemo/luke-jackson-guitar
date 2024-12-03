import Glide from "@glidejs/glide";
import { MutableRefObject, useEffect } from "react";

type carouselIdentifierType = number | MutableRefObject<any>;

export default function initGlide(
    carouselIdentifier: carouselIdentifierType,
    slideOffset = 3
) {
    // regardless of the origin of the carousel, we will use the same configuration
    const carouselConfig = {
        type: "carousel" as const,
        perView: slideOffset,
        focusAt: 0,
        startAt: 0, // this sets the initial slideIndex, changing it will change the arrow/dot logic
        gap: 25,
        peek: 0,
        swipeThreshold: false,
        dragThreshold: false,
        breakpoints: {
            800: {
                perView: 1,
            },
            480: {
                perView: 1,
            },
        },
    };

    // only execute the logic if there is a glide element on the page
    const glideElement = document.querySelector(".glide");
    if (glideElement) {
        let carousel: any;

        // chevronHandler and dotHandler are custom handlers that will be used to control the arrows and dots
        let chevronHandler = function (Glide: any, Components: any, Events: any) {
            return {
                mount() {
                    Events.on(["mount.after", "move"], () => {
                        const slideIndex = carousel.index;
                        const numOfSlides = Components.Html.slides.length;

                        // remove the 'hidden' class from the classlist for all controls
                        // update for design system - change the text within the controls to be the chevron
                        Components.Controls.items.forEach((control: any) => {
                            control.classList.remove("hidden");
                        });

                        // calculate whether to show the left chevron or not
                        if (slideIndex === 0) {
                            Components.Controls.items[0].style.display = "none";
                        } else {
                            Components.Controls.items[0].style.display = "";
                        }

                        // if the number of slides left is less than the slideOffset, hide the right chevron
                        if (slideOffset >= numOfSlides - slideIndex) {
                            Components.Controls.items[1].style.display = "none";
                        } else {
                            Components.Controls.items[1].style.display = "";
                        }
                    });
                },
            };
        };

        let dotHandler = function (Glide: any, Components: any, Events: any) {
            return {
                mount() {
                    Events.on("move", () => {
                        const slideIndex = carousel.index;

                        Components.Controls.items.forEach((control: any) => {
                            // check for data-glide-el="controls[nav]" those are the dots
                            if ( control.getAttribute("data-glide-el") === "controls[nav]" ) {
                                // loop through the children - each of the dots
                                control.childNodes.forEach((child: any) => {
                                    // if the dot we are currently on is the same as the slideIndex, add the 'active' class
                                    // if not, remove the 'active' class
                                    if ( child.getAttribute("data-glide-dir") === `=${slideIndex}` ) {
                                        child.classList.add("active");
                                    } else {
                                        child.classList.remove("active");
                                    }
                                });
                            }
                        });
                    });
                },
            };
        };

        // some logic will be different depending on the origin of the carousel
        // if carouselIdentifier is a number, we are building a wordpress block
        const isBlock = typeof carouselIdentifier === "number";

        // check if the carouselIdentifier is a number or a ref
        if (isBlock) {
            // target the carousel via it's index class - which is .carousel-index-{carouselIndex}
            let carouselIndex = carouselIdentifier;
            const targetClass = `.carousel-index-${carouselIndex}`;

            // check if the target class actually exists
            const carouselElement = document.querySelector(targetClass);
            if (!carouselElement) {
                console.error(`No carousel with index ${carouselIndex} found`);
                return;
            }

            // create a new instance of Glide - don't mount until we have the chevronHandler and dotHandler
            carousel = new Glide(targetClass, carouselConfig);            
        } else {
            // target the carousel via the ref
            carousel = new Glide(carouselIdentifier.current, carouselConfig);            
        }

        // we only need to generate the chevrons if we are building a block `createChevrons`
        const handlers = {
            chevronHandler: chevronHandler,
            dotHandler: dotHandler,
        };
        carousel.mount(handlers);

    }
}
