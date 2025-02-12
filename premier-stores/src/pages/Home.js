import React, { useState, useEffect } from 'react';

function Home() {
    // Local images array with the image paths
    const images = [
        '/images/styles/header_image/public/slide/image/NP13-24-banner-1-homepage.jpg',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-3-mobile.jpg',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-6-homepage.jpg',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-1-mobile.jpg',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-4-homepage.jpg',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-6-mobile.jpg?itok=Vn5yeJ2k',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-2-homepage.jpg',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-4-mobile.jpg',
        '/images/styles/header_image/public/slide/image/Premier-Singhs-Amazing-Value-Locally-Desktop-Banner.jpg',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-2-mobile.jpg',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-5-homepage.jpg',
        '/images/styles/header_image/public/slide/image/Premier-Singhs-Amazing-Value-Locally-Mobile-Banner.jpg?itok=zIcYwnx7',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-3-homepage.jpg',
        '/images/styles/header_image/public/slide/image/NP13-24-banner-5-mobile.jpg',
        '/images/styles/header_image/public/slide/image/img.png'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
        }, 500); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    return (
        <div>
            <h1>Welcome to Premier Stores</h1>
            <p>Your favorite neighborhood store.</p>

            <img
                src={images[currentImageIndex]} // Dynamically change the image
                alt="Home"
                className="page-image"
                style={{ width: '100%', height: 'auto', transition: 'opacity 1s' }}
            />
        </div>
    );
}

export default Home;
