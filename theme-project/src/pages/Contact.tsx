// src/pages/Contact.tsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();

  const backgroundColor = currentTheme.colors.background;
  const textColor = currentTheme.colors.text;
  const cardBg = currentTheme.colors.cardBackground;
  const borderColor = currentTheme.colors.borderColor;

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor, color: textColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div
        className="w-full max-w-2xl rounded-2xl shadow-lg p-6 sm:p-10"
        style={{
          backgroundColor: cardBg,
          boxShadow: currentTheme.card.boxShadow,
          borderRadius: currentTheme.card.borderRadius,
          color: textColor,
        }}
      >
        <h2
          className="text-2xl sm:text-3xl font-heading mb-4 sm:mb-6"
          style={{ color: currentTheme.colors.primary }}
        >
          Contact Us
        </h2>

        <p className="mb-4" style={{ color: textColor }}>
          Have questions, feedback, or need assistance? Feel free to reach out
          to us! Our support team is always ready to help you.
        </p>

        <p className="mb-3" style={{ color: textColor }}>
          <strong>Email:</strong> hr@hipster-inc.com
        </p>
        <p className="mb-3" style={{ color: textColor }}>
          <strong>Phone:</strong> +6582314107
        </p>
        <p className="mb-6" style={{ color: textColor }}>
          <strong>Address:</strong> #01-04, 75 Ayer Rajah Crescent, 139953, Singapore
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: currentTheme.colors.primary,
            color: "#fff",
            padding: `${currentTheme.button.paddingY} ${currentTheme.button.paddingX}`,
            borderRadius: currentTheme.button.borderRadius,
          }}
          className="font-semibold transition duration-300 cursor-pointer"
        >
          Send Message
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Contact;
