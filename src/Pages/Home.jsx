
import React from 'react';

const cardsData = [
  {
    title: 'Financial Blogs',
    image: './src/assets/img1.png',
    link: '#',
  },
  {
    title: 'Finance Tools',
    image: './src/assets/img2.png',
    link: '#',
  },
  {
    title: 'Financial Quizes/Challenges',
    image: './src/assets/img3.png',
    link: '#',
  },
];

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#43b0f1] to-[#e8eef1] flex items-center justify-between p-12 text-white">
        {/* Hero Section */}
        <section className="max-w-lg">
          <h1 className="text-5xl font-bold">Say 👋 to MoneyMatrix</h1>
          <section className="mt-5">
            <h2 className="text-4xl font-semibold">Welcome to Your Financial Future</h2>
            <p className="mt-4 text-xl text-black">
              Explore a range of financial products tailored to your needs.
            </p>
          </section>
          <button className="mt-6 bg-[#1e3d58] hover:bg-[#183446] text-white py-3 px-8 rounded-lg text-lg">
            Get Started ➨
          </button>
        </section>

        {/* Mockup Image */}
        <div className="mockup">
          <img
            src="./src/assets/img5.jpg"
            alt="Mockup of the app"
            className="w-[800px] rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex justify-around items-center mt-10 space-x-3">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 w-1/4 text-center transition-transform transform hover:-translate-y-3 hover:shadow-2xl hover:scale-105 hover:border hover:border-[#057dcd]"
          >
            <img
              src={card.image}
              alt="card-image"
              className="w-full h-40 object-contain rounded-md"
            />
            <h3 className="text-lg font-bold text-gray-700 mt-4">{card.title}</h3>
            <a
              href={card.link}
              className="inline-block mt-3 text-[#057dcd] font-bold hover:text-[#057dcd] transition-colors"
            >
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

