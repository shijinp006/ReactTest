// src/pages/About.tsx
import type { FC } from 'react';
import { useTheme } from '../context/ThemeContext';

const About: FC = () => {
  const { currentTheme } = useTheme();
  const { colors, fonts, button } = currentTheme;

  return (
    <div
      className="px-4 py-8 md:px-12 lg:px-24 max-w-5xl mx-auto"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        fontFamily: fonts.body,
      }}
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-6"
        style={{
          color: colors.primary,
          fontFamily: fonts.heading,
        }}
      >
        About Us
      </h2>

      <p className="text-base md:text-lg mb-4 leading-relaxed">
        We are a passionate team dedicated to providing high-quality products and an excellent shopping experience.
        Our mission is to bring you the best items from around the world, carefully curated to meet your expectations.
      </p>

      <p className="text-base md:text-lg mb-8 leading-relaxed">
        Founded in 2023, our journey began with a simple idea: to make online shopping
        enjoyable, reliable, and accessible for everyone. We believe in transparency,
        customer satisfaction, and continuous improvement.
      </p>

      <button
        className="shadow hover:opacity-90 transition duration-300 cursor-pointer"
        style={{
          backgroundColor: colors.primary,
          color: '#fff',
          padding: `${button.paddingY} ${button.paddingX}`,
          borderRadius: button.borderRadius,
          fontFamily: fonts.button,
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default About;
