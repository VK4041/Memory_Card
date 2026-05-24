export default function Card({ image, clickHandler }) {
    return (
        <div className='card' onClick={() => {
            clickHandler(image.id)
        }}>
            <img
                className='card-img'
                src={image.image}
                alt={image.alt}
            />
            <p className='card-name'>{image.name}</p>
        </div>
    );
}