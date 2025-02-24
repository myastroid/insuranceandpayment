import React from 'react';
import { motion } from 'framer-motion';

const CategoryGrid = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`p-4 rounded-lg flex flex-col items-center transition-all ${
              selectedCategory === category.id
                ? 'bg-indigo-100 border-2 border-indigo-500'
                : 'bg-white border-2 border-gray-200 hover:border-indigo-300'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-3 rounded-full bg-indigo-50 mb-2">
              {React.createElement(category.icon, {
                className: "h-6 w-6 text-indigo-600"
              })}
            </div>
            <span className="text-sm font-medium text-gray-700">{category.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;