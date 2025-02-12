
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
        '/images/styles/header_image/public/slide/image/img.png',
        // Add more image paths as needed
        '/images/styles/max_1300x1300/public/NP11-24-clementines.png',
        '/images/styles/max_1300x1300/public/NP13-24-dolly.png',
        '/images/styles/max_1300x1300/public/NP13-24-lenor.png',
        '/images/styles/max_1300x1300/public/NP13-24-pot-noodle.png',
        '/images/styles/max_1300x1300/public/NP13-24-andrex-family-soft.png',
        '/images/styles/max_1300x1300/public/NP13-24-doritos-salsa-sensations.png',
        '/images/styles/max_1300x1300/public/NP13-24-lindor.png',
        '/images/styles/max_1300x1300/public/NP13-24-pringles.png',
        '/images/styles/max_1300x1300/public/NP13-24-andrex-wipes.png',
        '/images/styles/max_1300x1300/public/NP13-24-dr-pepper-fanta-orange.png',
        '/images/styles/max_1300x1300/public/NP13-24-lotus-biscoff-smooth.png',
        '/images/styles/max_1300x1300/public/NP13-24-quaker.png',
        '/images/styles/max_1300x1300/public/NP13-24-arla.png',
        '/images/styles/max_1300x1300/public/NP13-24-dreamies.png',
        '/images/styles/max_1300x1300/public/NP13-24-lucozade.png',
        '/images/styles/max_1300x1300/public/NP13-24-quality-after-eight-dairy.png',
        '/images/styles/max_1300x1300/public/NP13-24-bakers-all-sorts.png',
        '/images/styles/max_1300x1300/public/NP13-24-febreeze.png',
        '/images/styles/max_1300x1300/public/NP13-24-lurpak.png',
        '/images/styles/max_1300x1300/public/NP13-24-quavers-french-fries.png',
        '/images/styles/max_1300x1300/public/NP13-24-bakers-superfoods.png',
        '/images/styles/max_1300x1300/public/NP13-24-felix.png',
        '/images/styles/max_1300x1300/public/NP13-24-mccain-birdseye.png',
        '/images/styles/max_1300x1300/public/NP13-24-rocky-caramel-jammie-viscount.png',
        '/images/styles/max_1300x1300/public/NP13-24-birdseye-burgers.png',
        '/images/styles/max_1300x1300/public/NP13-24-ferrero-rocher.png',
        '/images/styles/max_1300x1300/public/NP13-24-mccain-wedges.png',
        '/images/styles/max_1300x1300/public/NP13-24-shredded-wheat-shreddies-kitkat.png',
        '/images/styles/max_1300x1300/public/NP13-24-bold-fairy-ariel-pods.png',
        '/images/styles/max_1300x1300/public/NP13-24-fosters-bud-carls.png',
        '/images/styles/max_1300x1300/public/NP13-24-mccguigan-zero.png',
        '/images/styles/max_1300x1300/public/NP13-24-smirnoff-captain-morgan-famous.png',
        '/images/styles/max_1300x1300/public/NP13-24-budvar-peroni-kingfisher-san-miguel.png',
        '/images/styles/max_1300x1300/public/NP13-24-frijj.png',
        '/images/styles/max_1300x1300/public/NP13-24-milkybar-egg.png',
        '/images/styles/max_1300x1300/public/NP13-24-st-pierre.png',
        '/images/styles/max_1300x1300/public/NP13-24-cadbury-eggs.png',
        '/images/styles/max_1300x1300/public/NP13-24-fruit-shoots.png',
        '/images/styles/max_1300x1300/public/NP13-24-mission.png',
        '/images/styles/max_1300x1300/public/NP13-24-starbucks.png',
        '/images/styles/max_1300x1300/public/NP13-24-carling-john-brewdog-strongbow.png',
        '/images/styles/max_1300x1300/public/NP13-24-gold-wafer.png',
        '/images/styles/max_1300x1300/public/NP13-24-monster-energy.png',
        '/images/styles/max_1300x1300/public/NP13-24-tgi-fridays.png',
        '/images/styles/max_1300x1300/public/NP13-24-chocomel.png',
        '/images/styles/max_1300x1300/public/NP13-24-goodfellas.png',
        '/images/styles/max_1300x1300/public/NP13-24-nescafe.png',
        '/images/styles/max_1300x1300/public/NP13-24-twister-magnum.png',
        '/images/styles/max_1300x1300/public/NP13-24-coca-cola-diet-coke.png',
        '/images/styles/max_1300x1300/public/NP13-24-haribo-jelly.png',
        '/images/styles/max_1300x1300/public/NP13-24-nestle-family.png',
        '/images/styles/max_1300x1300/public/NP13-24-walkers.png',
        '/images/styles/max_1300x1300/public/NP13-24-corona-moretti-heineken-zero.png',
        '/images/styles/max_1300x1300/public/NP13-24-heinz-soup.png',
        '/images/styles/max_1300x1300/public/NP13-24-nestle-water-single.png',
        '/images/styles/max_1300x1300/public/NP13-24-warbuton.png',
        '/images/styles/max_1300x1300/public/NP13-24-dairylea-dunkers.png',
        '/images/styles/max_1300x1300/public/NP13-24-highland-spring.png',
        '/images/styles/max_1300x1300/public/NP13-24-nomadic.png',
        '/images/styles/max_1300x1300/public/NP13-24-winalot.png',
        '/images/styles/max_1300x1300/public/NP13-24-dairylea-snackers.png',
        '/images/styles/max_1300x1300/public/NP13-24-i-heart-wines.png',
        '/images/styles/max_1300x1300/public/NP13-24-onken.png',
        '/images/styles/max_1300x1300/public/NP13-24-desperado-thatchers.png',
        '/images/styles/max_1300x1300/public/NP13-24-jacks-cheese.png',
        '/images/styles/max_1300x1300/public/NP13-24-pampers-nappy.png',
        '/images/styles/max_1300x1300/public/NP13-24-diablo.png',
        '/images/styles/max_1300x1300/public/NP13-24-kitkat-malteser-egg.png',
        '/images/styles/max_1300x1300/public/NP13-24-pancake-mix.png',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    return (
        <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
            <h1>Welcome to Premier Stores</h1>
            <p>Your favorite neighborhood store.</p>

            <div style={{ display: 'flex', transition: 'transform 1s ease-out', transform: `translateX(-${currentImageIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        style={{ width: '100%', height: 'auto' }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
