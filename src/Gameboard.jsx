import { useEffect, useState } from 'react';
import Card from './Card.jsx'
import Scoreboard from './Scoreboard.jsx'
export default function Gameboard({ images }) {
    const [cardImages, setImages] = useState(images)
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [clickedIds, setClickedIds] = useState([]);
    function getShuffledArray(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }
    function clickHandler(id) {
        setImages(getShuffledArray(cardImages));

        if (clickedIds.includes(id)) {
            setScore(0);
            setClickedIds([]);
        } else {
            const nextScore = score + 1;
            setScore(nextScore);
            if (nextScore > bestScore) setBestScore(nextScore);

            setClickedIds([...clickedIds, id]);
        }
    }
    useEffect(() => {
        async function updateImages() {
            setImages(images)
        }
        updateImages()
    }, [images])
    return (
        <div className='gameboard'>
            <Scoreboard score={score} bestScore={bestScore} />
            {
                cardImages.map(image => (
                    <Card
                        key={image.id}
                        image={image}
                        clickHandler={clickHandler}
                    />
                )
                )
            }
        </div>
    );
}