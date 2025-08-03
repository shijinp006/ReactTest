// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-lg">
      <h2 className="text-2xl md:text-3xl font-heading text-primary mb-md">About Us</h2>
      <p className="mb-md text-text">
        We are a passionate team dedicated to providing high-quality products and an excellent shopping experience.
        Our mission is to bring you the best items from around the world, carefully curated to meet your expectations.
      </p>
      <p className="mb-lg text-text">
        Founded in 2023, our journey began with a simple idea: to make online shopping
        enjoyable, reliable, and accessible for everyone. We believe in transparency,
        customer satisfaction, and continuous improvement.
      </p>
      <button>Learn More</button>
    </div>
  );
};

export default About;