import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col justify-between text-center bg-white rounded-xl shadow-lg hover:shadow-xl p-4 transition-all duration-300 h-full">
      <img
        src={product.image}
        alt={product.title}
        className="max-w-full h-44 object-contain mb-4 mx-auto"
      />
      <h3 className="text-base font-semibold mb-2 text-gray-800 flex-grow">
        {product.title}
      </h3>
      <p className="font-bold text-lg mb-1 text-primary">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mb-4">{product.category}</p>
      <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
