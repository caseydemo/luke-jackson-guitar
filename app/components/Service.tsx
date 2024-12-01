import Image from "next/image";
export default function Service({ props }: any) {
  const { title, description, featured_image, images } = props;

  return (
    <div>
      <h2>{title}</h2>
      <div className="service_description">{description}</div>
      <Image 
        src={featured_image} 
        alt="the image didnt load" 
        height={200} 
        width={200} 
      />
      <div className="service_images">{images}</div>
    </div>
  );
}
