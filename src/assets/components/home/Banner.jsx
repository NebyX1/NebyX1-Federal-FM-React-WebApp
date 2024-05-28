import React, { useState, useEffect } from 'react';
import Image1 from '../../banner/1.jpg';
import Image2 from '../../banner/2.jpg';
import Image3 from '../../banner/3.jpg';

export const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 4000);

        return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }, []);

    return (
        <div className="banner-container m-auto mt-2">
            <img className={`banner-image ${currentImageIndex === 0 ? 'active' : ''}`} src={Image1} alt="Banner Image 1" />
            <img className={`banner-image ${currentImageIndex === 1 ? 'active' : ''}`} src={Image2} alt="Banner Image 2" />
            <img className={`banner-image ${currentImageIndex === 2 ? 'active' : ''}`} src={Image3} alt="Banner Image 3" />
        </div>
    );
}
