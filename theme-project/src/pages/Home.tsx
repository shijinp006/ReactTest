import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products?limit=12"
        );
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const backgroundColor = currentTheme.colors.background;
  const textColor = currentTheme.colors.text;
  const cardBg = currentTheme.colors.cardBackground;

  if (loading)
    return (
      <div className="p-10 text-center text-gray-600">Loading products...</div>
    );

  if (error)
    return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <motion.div
      className="min-h-screen px-4 py-6 md:px-8 lg:px-16"
      style={{ backgroundColor, color: textColor }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl font-extrabold mb-4"
          style={{ color: currentTheme.colors.primary }}
        >
          Explore Top Deals!
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg leading-relaxed"
        >
          Exclusive discounts and amazing products just for you. Don’t miss out!
        </motion.p>
      </div>

      {/* Categories */}
      <motion.div
        variants={itemVariants}
        className="flex overflow-x-auto gap-4 mb-8 py-2 px-2 scrollbar-hide"
      >
        {["Fashion", "Electronics", "Books", "Home", "Appliances"].map(
          (cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-max px-4 py-2 border rounded-full shadow-sm hover:shadow-md cursor-pointer text-sm font-medium"
              style={{
                backgroundColor: cardBg,
                color: textColor,
                borderColor: currentTheme.colors.borderColor,
              }}
            >
              {cat}
            </motion.div>
          )
        )}
      </motion.div>

      {/* CTA Button */}
      <motion.div variants={itemVariants} className="flex justify-center mb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: currentTheme.colors.primary,
            color: "#fff",
            padding: `${currentTheme.button.paddingY} ${currentTheme.button.paddingX}`,
            borderRadius: currentTheme.button.borderRadius,
          }}
          className="font-semibold shadow hover:brightness-110 transition duration-300 cursor-pointer"
        >
          Shop Now
        </motion.button>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className={`grid ${
          currentTheme.layout.type === "minimal"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        } gap-6`}
        variants={containerVariants}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="rounded-lg transition duration-300 cursor-pointer"
            style={{
              backgroundColor: cardBg,
              boxShadow: currentTheme.card.boxShadow,
              borderRadius: currentTheme.card.borderRadius,
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;
