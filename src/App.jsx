import { useEffect, useState } from 'react';
import Card from './Card.jsx'
export default function App() {
  const [photos, setPhotos] = useState([]);
  //const [loading, setLoading] = useState(true)
  function clickHandler(clicked, setClicked) {
    console.log(clicked)
    setClicked(!clicked)
  }
  function getRandomPage() {
    return Math.random() * 10
  }
  useEffect(() => {
    async function fetchPhotos() {
      const data = await fetch(`https://api.pexels.com/v1/search?query=wild+animals`,
        // const data = await fetch(`https://api.pexels.com/v1/search?query=wild+animals&page=${getRandomPage()}}`,
        {
          headers: {
            'Authorization': 'AKf8yAjAJBfe2G3H3G2C1tUbM9S6K85zTBhYYGpJTzrpBNRMRm3GYz3D'
          }
        });
      const result = await data.json();
      console.log(result.photos)
      setPhotos(result.photos);
      //setLoading(false)
    }
    fetchPhotos()
  }, [])
  // if (loading) {
  //   return <div>Fetching Data...</div>
  // }
  return (
    <div className='grid grid-cols-4'>
      {
        photos.map(photo => (
          <Card key={photo.id} photo={photo} clickHandler={clickHandler} />
        )
        )
      }
    </div>
  );

}