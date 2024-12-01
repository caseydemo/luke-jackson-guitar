export default function Service({props}: any) {

    const {title, description, featured_image, images} = props;

    console.log('description', description)
    console.log('featured_image', featured_image)
    console.log('images', images)

    return (
        <div>
            <h2>Service Title: {title}</h2>
            <div className="service_description">{description}</div>
            <div className="service_featured_imge" >{featured_image}</div>
            <div className="service_images" >{images}</div>
        </div>
    )
}