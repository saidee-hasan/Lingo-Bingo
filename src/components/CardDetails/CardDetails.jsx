import React from 'react';

function CardDetails({ data }) {
    const { word, pronunciation, meaning, part_of_speech, difficulty, when_to_say, example } = data;

    return (
        <div className="bg-white border border-gray-300 space-y-3 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{word}</h2>
            <p className="text-gray-600"><strong>Pronunciation :</strong> {pronunciation}</p>
            <p className="text-gray-600"><strong>Meaning :</strong> {meaning}</p>
            <p className="text-gray-600"><strong>Part of Speech :</strong> {part_of_speech}</p>
            <p className="text-gray-600"><strong>Difficulty :</strong> {difficulty}</p>
            <p className="text-gray-600"><strong>When to Say :</strong> {when_to_say}</p>
            <p className="text-gray-600"><strong>Example :</strong> {example}</p>
        </div>
    );
}

export default CardDetails;