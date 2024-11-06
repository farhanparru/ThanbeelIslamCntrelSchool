// eslint-disable-next-line no-unused-vars
import React from 'react';

const Advert = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">School Activities</h1>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-semibold text-purple-700 mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-200">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const cards = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cySnA_Cm25zoyKZFmQffkPG00in1rJOobg&s',
      title: 'Science Fair',
      description: 'Students showcase their innovative science projects, encouraging exploration and critical thinking.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToUoSUOl7hCMfkZlPzXx-mvwTUtWppLRNLWJWO8x33pzCJR5sEzuwKfMvvVpjVsmgRKa8&usqp=CAU',
      title: 'Sports Day',
      description: 'An exciting day filled with athletic events, teamwork, and school spirit to promote physical fitness.',
    },
    {
      image: 'https://thumbs.dreamstime.com/b/creative-kids-creative-arts-crafts-classes-school-activities-creative-projects-children-home-school-155721818.jpg',
      title: 'Art & Craft Workshop',
      description: 'A creative space for students to explore different forms of art and develop their artistic talents.',
    },
    {
      image: 'https://www.shutterstock.com/image-photo/happy-children-drawing-coloring-classmates-600nw-2472680023.jpg',
      title: 'Cultural Day',
      description: 'Celebrating diversity, students present various cultural performances, food, and traditions.',
    },
    
  ];
  

export default Advert;
