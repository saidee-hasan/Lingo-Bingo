import React, { useState } from 'react';
import Success from '../Success/Success';

const slides = [
    {
        id: 1,
        image: 'https://i.ibb.co.com/37KNKyv/book-181404689-1000-removebg-preview.png',
        title: 'Unlock a World of Languages',
        description: 'Join our community and start your language journey today!',
        cta: 'Get Started',
        link: '/register'
    },
    {
        id: 2,
        image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?semt=ais_hybrid',
        title: 'Learn Anywhere, Anytime',
        description: 'Practice your skills on the go with our mobile app.',
        cta: 'Get Started',
        link: '/register'
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
                    className={`absolute inset-0 rounded-md transition-opacity bg-slate-300 duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="absolute md:p-12 p-2 inset-0  flex flex-col justify-center items-start p-8">
                        <h2 className="text-2xl md:text-4xl text-black  font-bold">{slide.title}</h2>
                        <p className="mt-4 text-black">{slide.description}</p>
                        <a href={slide.link} className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            {slide.cta}
                        </a>
                    </div>
                    <div className="justify-end items-end text-center">
                    <div className="flex justify-end">
    <img src={slide.image} alt="Description" />
</div>                   
</div>
                </div>
            ))}

            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg hover:bg-gray-200">
                &#10094;
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg hover:bg-gray-200">
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