import HornedBeast from "./HornedBeast";

function Gallery() {
    return (
        <>
            <HornedBeast
                image_url="https://placehold.co/600x400" alt="place holder"
                title="newTitle"
                description="new description" />
            <HornedBeast
                image_url="https://placehold.co/600x400" alt="place holder"
                title="newTitle"
                description="new description" />
        </>
    )
}

export default Gallery;
