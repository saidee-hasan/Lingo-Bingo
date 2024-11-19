import React from 'react';

const Tips = () => {
  const tips = [
    {
      title: "Practice Regularly",
      description: "Consistency is key to retaining new vocabulary. Set aside time each day for practice."
    },
    {
      title: "Use Flashcards",
      description: "Create flashcards with words and their meanings to test yourself and reinforce learning."
    },
    {
      title: "Read Extensively",
      description: "Reading books, articles, and blogs exposes you to new words in context, enhancing understanding."
    },
    {
      title: "Engage in Conversations",
      description: "Practice speaking with others to reinforce your vocabulary and improve pronunciation."
    },
    {
      title: "Utilize Vocabulary Apps",
      description: "Supplement your learning with vocabulary-building apps for extra practice and gamification."
    },
    {
      title: "Learn in Context",
      description: "Instead of memorizing isolated words, learn them in sentences to understand their usage better."
    },
  ];

  return (
    <section className="tips p-8 bg-gray-50">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Tips for Effective Vocabulary Learning</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="tip-card p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-200 bg-white">
            <h3 className="font-semibold text-2xl text-gray-700">{tip.title}</h3>
            <p className="mt-2 text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;