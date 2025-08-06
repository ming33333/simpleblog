import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import BlogCard from '../components/BlogCard';
import TravelMap from '../components/TravelMap';
import '../styles/Home.css';
import blogs from '../configs/blogData';



const Home = () => {
  const sorted_blogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div>
      <div className="travel-map-container">
        <TravelMap />
      </div>
      <div className="blog-list">
        {sorted_blogs.map((blog, index) => (
          <Link key={index} to={`/blog/${blog.url}`} className="blog-link">
            <BlogCard
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;