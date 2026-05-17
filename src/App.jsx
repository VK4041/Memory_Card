import { useEffect, useState } from 'react';
import Gameboard from './Gameboard.jsx'
export default function App() {
  const [images, setImages] = useState([]);
  function getRandomPage() {
    return Math.floor(Math.random() * 7);
  }
  useEffect(() => {
    async function fetchPhotos() {
      const data = await fetch(`https://dragonball-api.com/api/characters?page=${getRandomPage()}&limit=8`,
      );
      const result = await data.json();
      console.log(result.items)
      setImages(result.items);
    }
    fetchPhotos()
  }, [])
  return (
    <div className='container'>
      <Gameboard images={images} />
    </div>

  );

}