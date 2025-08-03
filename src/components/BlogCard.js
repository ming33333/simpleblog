import React from 'react';

/**
 * BlogCard Component
 *
 * A reusable component that displays a blog post card with an image, title, and excerpt.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the blog post.
 * @param {string} props.excerpt - A short excerpt or summary of the blog post.
 * @param {string} props.image - The URL of the image to display for the blog post.
 * @returns {JSX.Element} - The rendered blog card component.
 *
 * @example
 * <BlogCard
 *   title="How to Stay Mindful"
 *   excerpt="Learn how to practice mindfulness in your daily life."
 *   image="/assets/images/mindfulness.jpg"
 * />
 */
const BlogCard = ({ title, excerpt, image }) => {
  return (
    <div className="blog-card">
      {/* <img src={image} alt={title} className="blog-card-image" /> */}
      <div className="blog-card-content">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-excerpt">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;