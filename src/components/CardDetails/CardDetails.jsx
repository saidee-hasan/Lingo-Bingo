import React, { useState } from 'react';

function CardDetails({ data }) {
    const { word, pronunciation, meaning, part_of_speech, difficulty, when_to_say, example } = data;
    
    // State to manage loading status
    const [isLoading, setIsLoading] = useState(false);

    // Function to handle pronunciation
    const handlePronounce = () => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; // Change to 'es-ES' for Spanish

        // Set loading to true
        setIsLoading(true);

        // Speak the word
        window.speechSynthesis.speak(utterance);

        // Reset loading state after speaking
        utterance.onend = () => {
            setIsLoading(false);
        };
    };

    return (
        <div 
            className="bg-white border border-gray-300 space-y-3 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer" 
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{word}</h2>
            <p className="text-gray-600"><strong>Pronunciation :</strong> {pronunciation}</p>
            <p className="text-gray-600"><strong>Meaning :</strong> {meaning}</p>
            <p className="text-gray-600"><strong>Part of Speech :</strong> {part_of_speech}</p>
            <p className="text-gray-600"><strong>Difficulty :</strong> {difficulty}</p>
            <p className="text-gray-600"><strong>When to Say :</strong> {when_to_say}</p>
            <p className="text-gray-600"><strong>Example :</strong> {example}</p>
            
            <button 
                onClick={handlePronounce} 
                className={`mt-4 ${isLoading ? 'bg-gray-400' : 'bg-blue-500'} text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200`}
                disabled={isLoading} // Disable the button while loading
            >
                {isLoading ? 'Pronouncing...' : 'Pronounce'}
            </button>
        </div>
    );
}

export default CardDetails;