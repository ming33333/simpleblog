import React from 'react';

const About = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1>About Us</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <img 
                    src="/simpleblog/images/jermingo/ming.jpg" 
                    alt="Jermingo" 
                    style={{ height: '20em' }} 
                />
                <img 
                    src="/simpleblog/images/jermingo/jermaine.jpg" 
                    alt="Jermingo" 
                    style={{ height: '20em' }} 
                />
            </div>
            <p>
                Just two girls out here trying to relax, recharge, and live our best lives. 
                We're planning something big—a one-year sabbatical in 2028 to explore, learn, and just breathe.
            </p>
            <p>
                Life's too short to not take a break and see the world. Stay tuned for our adventures!
            </p>
        </div>
    );
};

export default About;