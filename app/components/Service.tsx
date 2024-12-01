export default function Service({props}: any) {
    const {title, key, value} = props;
    return (
        <div>
            <h2>Service Title: {title}</h2>
            <div className="service_key">{key}</div>
            <div className="service_value" >{value}</div>
        </div>
    )
}