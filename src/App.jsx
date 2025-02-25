import React, { useState } from 'react';
import { ShoppingCart, Tv, Car, Bike, Smartphone, Watch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CategoryGrid from './components/CategoryGrid';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { categories, products } from './data/sampleData';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const handleAddToCart = (product, rentalDetails) => {
    setCartItems([...cartItems, { ...product, ...rentalDetails }]);
  };

    

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItemCount={cartItems.length} onCartClick={() => setShowCart(true)} />
      
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {showCart ? (
            <motion.div
              key="cart"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Cart 
                items={cartItems} 
                onClose={() => setShowCart(false)}
                setCartItems={setCartItems}
              />
            </motion.div>
          ) : selectedProduct ? (
            <motion.div
              key="product-details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProductDetails 
                product={selectedProduct}
                onBack={() => setSelectedProduct(null)}
                onAddToCart={handleAddToCart}
              />
            </motion.div>
          ) : (
            <motion.div
              key="category-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CategoryGrid 
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              {selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <ProductList 
                    products={products.filter(p => p.category === selectedCategory)}
                    onProductSelect={setSelectedProduct}
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
       
    
      </main>
    </div>
  );
}

export default App;
