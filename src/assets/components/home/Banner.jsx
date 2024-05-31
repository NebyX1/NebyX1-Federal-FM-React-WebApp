import React, { useState, useEffect } from 'react';
import Image1 from '../../banner/1.webp';
import Image2 from '../../banner/2.webp';
import Image3 from '../../banner/3.webp';
import styles from '../../../styles/banner.module.css';

export const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`mt-2 mb-2 m-auto ${styles.bannerContainer}`}>
            <img className={`${styles.bannerImage} ${currentImageIndex === 0 ? styles.active : ''}`} src={Image1} alt="Banner Image 1" />
            <img className={`${styles.bannerImage} ${currentImageIndex === 1 ? styles.active : ''}`} src={Image2} alt="Banner Image 2" />
            <img className={`${styles.bannerImage} ${currentImageIndex === 2 ? styles.active : ''}`} src={Image3} alt="Banner Image 3" />
        </div>
    );
}
