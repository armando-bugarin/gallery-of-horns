
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function HornedBeast(props) {
    const [status, setStatus] = useState("like");
    const [favoriteCount, setFavoriteCount] = useState(0);

    function handleClick() {
        if (status === "like") {
            setFavoriteCount(favoriteCount + 1);
        } else {
            setFavoriteCount(favoriteCount + 0);
        }
    }

    return (
        <div onClick={handleClick}>
            <Image src={props.image_url} alt="" rounded fluid></Image>
            <h3>{status}{" "}
                <span>
                    <FaHeart /> {favoriteCount}
                </span>
            </h3>
        </div>
    );
}

// function HornedBeast(props) {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <img src={props.image_url} alt="" />
//             <p>{props.description}</p>
//         </div>
//     );
// }

// export default HornedBeast;
