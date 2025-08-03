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
    <div style={{ padding: '100px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        border: '2px solid #333', // Add border to the title
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center'
      }}>
        {blog.title}
      </h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        margin: '20px 0'
      }}>
        <img 
          src={`/simpleblog/images/blog/${blog.img}`}
          alt="Jermingo" 
          style={{
            height: '30em',
            border: '2px solid #ccc', // Add border to the image
            borderRadius: '10px',
            padding: '5px'
          }} 
        />
      </div>
      <div style={{
        padding: '40px', // Add padding to the div
        margin: '20px 0', // Add margin to create space around the div
        border: '1px solid #ddd', // Add border to the div
        borderRadius: '10px', // Round the corners of the border
        backgroundColor: '#f9f9f9'
      }}>
        <p style={{
          fontSize: '1.5rem',
          lineHeight: '1.8',
          margin: 0 // Remove default margin from the <p> tag
        }}>
          {blog.body}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;