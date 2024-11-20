import React from 'react';

const UserTestimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This app has transformed my vocabulary learning! I can now remember words easily.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKOdmJz8Z2pDtYgFgR2u9spABvNNPKYYtGw&s",
      rating: 5,
    },
    {
      name: "Jane Smith",
      feedback: "I love the interactive quizzes! They make learning fun and engaging.",
      image: "https://via.placeholder.com/150", // Replace with actual image path
      rating: 4,
    },
    {
      name: "Alice Johnson",
      feedback: "The tips provided are very helpful. I've seen significant improvement in my vocabulary.",
      image: "https://via.placeholder.com/150", // Replace with actual image path
      rating: 5,
    },
    {
      name: "Bob Brown",
      feedback: "A fantastic tool for anyone looking to enhance their language skills!",
      image: "https://via.placeholder.com/150", // Replace with actual image path
      rating: 4,
    },
  ];

  return (
    <section className="testimonials p-8 bg-gray-50">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">User  Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-blue-500 mr-4" />
              <div>
                <p className="font-semibold text-lg text-gray-700">{testimonial.name}</p>
                <div className="flex mt-1">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span> // Star icon
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                    <span key={i} className="text-gray-300">&#9733;</span> // Empty star icon
                  ))}
                </div>
              </div>
            </div>
            <p className="italic text-gray-600">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserTestimonials;