"use client";
import Glide, { EventsBus } from "@glidejs/glide";
import { useEffect, useRef, Children } from "react";
import initGlide from "../lib/initGlide";
import chevron from "../../public/svgs/chevron_square.svg";
import Image from "next/image";


interface CarouselProps {
	slideOffset?: number;
	addClasses?: string;
	children: any;
}

export default function Carousel({
	slideOffset = 3,
	addClasses = '',
	children,
}: CarouselProps) {

	// helps us keep track of this specific carousel
	const ref = useRef(null);

    // initialize the glide carousel with shared logic in initGlide.ts
    useEffect(() => {        
        initGlide(ref, slideOffset);
    }, [ref, slideOffset]);


	// convert children to array - children can be anything - array, object, component etc
	const arrayChildren = Children.toArray(children);

	// create navigation dots - pattern is to create a dot for every slideOffset
	// i.e. if slideOffset is 3, we will have a dot for every 3rd slide
	const carouselDotInit = () => {
		const dots = [];
		for (let i = 0; i < arrayChildren.length; i += slideOffset) {
			dots.push(
				<span
					key={i}
					className={i === 0 ? "dot active" : "dot"}
					data-glide-dir={`=${i}`}
				></span>
			);
		}
		return dots;
	};

	// actual component being returned    
	return (
		<div className='ket-carousel-wrapper'>
			<div className={`${addClasses} ket-carousel glide`} ref={ref}>

				{/* left chevron */}
				<div className='glide__arrows' data-glide-el='controls' >
					<div className='glide__arrow glide__arrow--left' data-glide-dir='|<'>
                        <Image src={chevron} alt='chevron' />
					</div>
				</div>

				{/* carousel track */}
				<div className='glide__track' data-glide-el='track'>
					<div className='glide__slides'>
						{arrayChildren.map((child, index) => (
							// carousel item
							<div key={index} className='glide__slide'>
                                {child}
                            </div>
						))}
					</div>
				</div>

				{/* right chevron */}
				<div className='glide__arrows' data-glide-el='controls'>
					<div className='glide__arrow glide__arrow--right' data-glide-dir='|>'>
                        {/* chevron.svg to render here */}
                        <Image src={chevron} alt='chevron' />
					</div>
				</div>

				{/* navigation dots */}
				<div className='carousel-dots' data-glide-el='controls[nav]'>
					{carouselDotInit()}
				</div>

			</div>
		</div>
	);
}
