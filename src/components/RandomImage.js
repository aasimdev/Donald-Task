import React, { useEffect, useState } from 'react'
import { fetchImages } from '../utils/Api';

const RandomImage = () => {
    const [imagesData, setImagesData] = useState();
    useEffect(() => {
        const getImages = async () => {
            try {
                const result = await fetchImages();
                const randomImages = getRandomItems(result, 9);
                setImagesData(randomImages)
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        getImages();
    }, []);

    const getRandomItems = (array, count) => {
        const shuffledArray = array.sort(() => 0.5 - Math.random());
        return shuffledArray.slice(0, count);
    };
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 mt-6'>
            {imagesData && imagesData.map(item => (
                <img key={item.id} src={item.download_url} alt={item.author} />
            ))}
        </div>
    )
}

export default RandomImage