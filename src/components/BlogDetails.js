import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../configs/blogData'; // Import the blogs data

const BlogDetails = () => {
  const { url } = useParams(); // Get the blog ID from the URL
  const blog = blogs.find((blog) => blog.url === url); // Find the blog by ID

  if (!blog) {
    return <h1>Blog not found</h1>; // Handle invalid blog IDs
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetails;