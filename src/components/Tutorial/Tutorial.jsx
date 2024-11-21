import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tutorial() {
  const navigate = useNavigate();

  const handleLearnVocabularies = () => {
    navigate('/lessons'); // Navigate to the "start-lesson" route
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Language Learning Tutorial</h1>
      <p className="mb-4 text-gray-700">
        Welcome to the language learning tutorial! Below are some helpful videos to get you started.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        {/* Embedded YouTube Videos */}
        <iframe 
          width="100%" 
          height="200" 
          src="https://www.youtube.com/embed/L74AFxTUc4M?si=lMcNY34BKmw69S68" 
          title="YouTube video 1" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
       <iframe   width="100%" 
          height="200"  src="https://www.youtube.com/embed/C45Bp5hb028?si=DsNX_fiobKZ5UcQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe 
          width="100%" 
          height="200" 
          src="https://www.youtube.com/embed/video_id_3" 
          title="YouTube video 3" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        <iframe 
          width="100%" 
          height="200" 
          src="https://www.youtube.com/embed/video_id_4" 
          title="YouTube video 4" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/DudjllQkwps?si=Y9unnJblylaZ7cVm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe 
          width="100%" 
          height="200" 
          src="https://www.youtube.com/embed/video_id_6" 
          title="YouTube video 6" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        <iframe 
          width="100%" 
          height="200" 
          src="https://www.youtube.com/embed/L74AFxTUc4M?si=lMcNY34BKmw69S68" 
          title="YouTube video 1" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
       <iframe   width="100%" 
          height="200"  src="https://www.youtube.com/embed/C45Bp5hb028?si=DsNX_fiobKZ5UcQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
      </div>

      <button 
        onClick={handleLearnVocabularies} 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
      >
        Learn Vocabularies
      </button>
    </div>
  );
}

export default Tutorial;