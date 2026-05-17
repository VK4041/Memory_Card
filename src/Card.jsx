import { useState } from 'react';
export default function Card({ image, clickHandler, parentClicked }) {
    const [shuffle, setShuffle] = parentClicked;
    const [clicked, setClicked] = useState(false);
    return (
        <div className='card'>
            <img
                className='card-img'
                src={image.image}
                alt={image.alt}
                onClick={() => {
                    clickHandler(shuffle, setShuffle)
                    clickHandler(clicked, setClicked)
                }}
            />
            <p className='card-name'>{image.name}</p>
        </div>
    );
}