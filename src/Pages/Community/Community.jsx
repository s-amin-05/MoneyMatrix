
import React, { useState } from 'react';

// Sample data for the feed
const postsData = [
  {
    id: 1,
    user: 'John Doe',
    image: './src/assets/card_img4.avif', // Placeholder image
    caption: 'Just invested in my first stock! Excited to see where this journey takes me. #Investing #Finance',
    comments: [
      { user: 'Alice', comment: 'Congrats! Best of luck!' },
      { user: 'Bob', comment: 'What stock did you invest in?' },
    ],
  },
  {
    id: 2,
    user: 'Jane Smith',
    image: './src/assets/cards_img2.jpg',
    caption: 'Remember to always diversify your investments! It’s key to managing risk. #FinancialLiteracy',
    comments: [
      { user: 'Chris', comment: 'Absolutely agree with this!' },
      { user: 'Eve', comment: 'Diversification is important!' },
    ],
  },
  {
    id: 3,
    user: 'Mark Johnson',
    image: './src/assets/card_img7.avif',
    caption: 'Looking for tips on budgeting effectively. What methods do you use? #Budgeting',
    comments: [],
  },
  // Add more posts as needed
];

// Single Post Component
const Post = ({ user, image, caption, comments }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      comments.push({ user: 'You', comment: newComment });
      setNewComment('');
    }
  };

  return (
    <div className="bg-white p-4 border rounded-lg shadow-md mb-4">
      <h3 className="font-bold">{user}</h3>
      <img src={image} alt="Post" className="w-full h-60 object-cover rounded-md my-2" />
      <p>{caption}</p>

      <div className="mt-4">
        <h4 className="font-semibold">Comments:</h4>
        {comments.map((comment, index) => (
          <p key={index} className="text-gray-600">
            <strong>{comment.user}:</strong> {comment.comment}
          </p>
        ))}
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-4 flex">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="border rounded-l-md p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-r-md px-4">
          Post
        </button>
      </form>
    </div>
  );
};

// Sidebar Component for Additional Information
const Sidebar = ({ title, content }) => (
  <div className="bg-gray-100 p-4 border rounded-lg shadow-md mb-4">
    <h3 className="font-bold">{title}</h3>
    <p className="mt-2">{content}</p>
  </div>
);

// Community Page Component
const CommunityPage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Community</h1>
        <p className="mt-2 text-gray-600">Join discussions and share insights about finance!</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Left Sidebar */}
        <div className="md:col-span-1 lg:col-span-1">
          <Sidebar 
            title="Financial Tools"
            content="Explore tools like budgeting apps, investment calculators, and more to assist in your financial journey."
          />
          <Sidebar 
            title="FAQs"
            content="Find answers to common financial questions, from investing basics to retirement planning."
          />
        </div>

        {/* Center Column for Posts */}
        <div className="md:col-span-2 lg:col-span-2">
          {postsData.map((post) => (
            <Post
              key={post.id}
              user={post.user}
              image={post.image}
              caption={post.caption}
              comments={post.comments}
            />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-1 lg:col-span-1">
          <Sidebar 
            title="Success Stories"
            content={
              <ul>
                <li>1. Sarah saved $10,000 in 6 months.</li>
                <li>2. Mike grew his investment portfolio by 150%!</li>
              </ul>
            }
          />
          <Sidebar 
            title="Upcoming Workshops"
            content="Join our next workshop on investing basics to enhance your knowledge!"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
