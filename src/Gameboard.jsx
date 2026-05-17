import { useEffect, useState } from 'react';
import Card from './Card.jsx'
export default function Gameboard({ images }) {
    const [clicked, setClicked] = useState(false);
    function clickHandler(clicked, setClicked) {
        console.log(clicked)
        setClicked(!clicked)
    }
    return (
        <div className='gameboard'>
            {
                images.map(image => (
                    <Card
                        key={image.id}
                        image={image}
                        clickHandler={clickHandler}
                        parentClicked={[clicked, setClicked]} />
                )
                )
            }
        </div>
    );
}