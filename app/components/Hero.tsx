import Image from "next/image";
export default function Hero() {
    return (
        <section>
            <div className="hero-image-container" >
                <Image
                    src='/luke_hero_image_1.jpg'
                    alt='Luke Jackson Guitar'
                    width={600}
                    height={600}
                />
            </div>
            <h1 className='title'>Luke Jackson Guitar</h1>
            <h2 className='subtitle'>
                Central KY based guitarist, educator and composer.
            </h2>
        </section>
    );
}
