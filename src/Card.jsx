import { useState } from 'react';
export default function Card({ photo, clickHandler }) {
    const [clicked, setClicked] = useState(false)
    return (
        <div className='card'>
            <img className='card-img' src={photo.src.small} alt={photo.alt} onClick={() => clickHandler(clicked, setClicked)} />
        </div>
    );
}