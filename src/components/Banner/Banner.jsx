// Slider.js
import React, { useState } from 'react';
import Success from '../Success/Success';

const slides = [
    {
        id: 1,
        image: 'https://via.placeholder.com/800x400?text=Language+Learning+1',
        title: 'Unlock a World of Languages',
        description: 'Join our community and start your language journey today!',
        cta: 'Get Started',
        link: '#'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/800x400?text=Language+Learning+2',
        title: 'Learn Anywhere, Anytime',
        description: 'Practice your skills on the go with our mobile app.',
        cta: 'Download Now',
        link: '#'
    },
    
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute md:p-12 p-2 inset-0 bg-gray-500  flex flex-col justify-center items-start p-8">
                        <h2 className="text-2xl md:text-4xl text-white font-bold">{slide.title}</h2>
                        <p className="mt-4 text-white">{slide.description}</p>
                        <a href={slide.link} className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            {slide.cta}
                        </a>
                    </div>
                </div>
            ))}

            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2  rounded-full p-2 shadow-lg hover:bg-gray-200">
                &#10094;
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2  rounded-full p-2 shadow-lg hover:bg-gray-200">
                &#10095;
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    ></button>
                ))}
            </div>
            
        </div>
    );
};

export default Banner;