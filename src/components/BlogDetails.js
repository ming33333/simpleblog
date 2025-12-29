import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../configs/blogData'; // Import the blogs data
import '../styles/BlogDetails.css'; // Import the CSS file

const BlogDetails = () => {
  const { url } = useParams(); // Get the blog ID from the URL
  const blog = blogs.find((blog) => blog.url === url); // Find the blog by ID

  if (!blog) {
    return <h1>Blog not found</h1>; // Handle invalid blog IDs
  }
  const imageSrc = `/images/blog/${blog.img}` 
  return (
    <div className="blog-details-container">
      <h1 className="blog-title">{blog.title}</h1>
      <div className="blog-image-container">
        <img 
          src={imageSrc}
          alt={blog.title}
          className="blog-image"
        />
      </div>
      <div className="blog-body-container">
        <p className="blog-body">{blog.body}</p>
      </div>
    </div>
  );
};

export default BlogDetails;