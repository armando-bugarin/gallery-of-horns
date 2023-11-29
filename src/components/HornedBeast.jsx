function HornedBeast(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.image_url} alt="" />
            <p>{props.description}</p>
        </div>
    );
}

export default HornedBeast;
