import React from 'react';


const cardsData = [
  {
    title: 'How to deal with Unknown Risks in Life and Investing?',
    image: './src/assets/card_img1.avif',
    link: '#',
  },
  {
    title: 'How to 10x your Generational Wealth?',
    image: './src/assets/cards_img2.jpg',
    link: '#',
  },
  {
    title: 'Investing with Minimal Savings: A Guide for Women',
    image: './src/assets/card_img3.jpeg',
    link: '#',
  },
  {
    title: 'Understanding Stock Market Basics',
    image: './src/assets/card_img4.avif',
    link: '#',
  },
  {
    title: 'Diversifying Your Investment Portfolio',
    image: './src/assets/card_img5.avif',
    link: '#',
  },
  {
    title: 'Retirement Planning Made Simple',
    image: './src/assets/card_img6.avif',
    link: '#',
  },
  {
    title: 'The Importance of Emergency Funds',
    image: './src/assets/card_img7.avif',
    link: '#',
  },
  {
    title: 'How to Read Financial Statements',
    image: './src/assets/card_img8.avif',
    link: '#',
  },
  {
    title: 'Building a Sustainable Investment Strategy',
    image: './src/assets/card_img9.avif',
    link: '#',
  },
];

const Blog = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-10 gap-10">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center transition-transform transform hover:-translate-y-3 hover:shadow-xl hover:border hover:border-[#057dcd]"
        >
          <img
            src={card.image}
            alt="card-image"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold text-gray-700 mt-4">
            {card.title}
          </h3>
          <a
            href={card.link}
            className="inline-block mt-3 text-[#43b0f1] font-bold hover:text-[#1e3d58] transition-colors"
          >
            Learn More &rarr;
          </a>
        </div>
      ))}
    </div>
  );
};

export default Blog;
