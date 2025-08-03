import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Contact Us</h1>
            <p>Welcome to Jermingo's contact page! Feel free to reach out to us through the following:</p>
            
            <h2>Email</h2>
            <ul>
                <li>Ming: ming@jermingo.com</li>
                <li>Jermaine: jermaine@jermingo.com</li>
            </ul>
            
            <h2>Socials</h2>
            <ul>
                <li>Twitter: <a href="https://twitter.com/jermingo" target="_blank" rel="noopener noreferrer">@jermingo</a></li>
                <li>Instagram: <a href="https://instagram.com/jermingo" target="_blank" rel="noopener noreferrer">@jermingo</a></li>
            </ul>
            
            <p>We look forward to hearing from you!</p>
        </div>
    );
};

export default Contact;