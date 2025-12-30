import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../configs/blogData'; // Import blog data for dynamic links

const Sitemap = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1>Sitemap</h1>
            <p>Welcome to the sitemap for Jermingo. Below is a list of all the important pages on our website:</p>

            <h2>Static Pages</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/cookies">Cookie Policy</Link></li>
                <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
            </ul>

            <h2>Blog Posts</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.url}>
                        <Link to={`/blog/${blog.url}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sitemap;