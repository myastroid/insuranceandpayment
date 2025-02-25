import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import PaymentForm from '../paymenntcomponents/PaymentForm';
const Cart = ({ items, onClose, setCartItems }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });

  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handlePaymentSuccess = (values) => {
    console.log('Payment successful:', values);
  };

  
 
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.totalAmount, 0);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('Payment integration would be implemented here');
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 py-8">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {items.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex border rounded-lg p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.name}</h3>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    {new Date(item.startDate).toLocaleDateString()} - {new Date(item.endDate).toLocaleDateString()}
                  </p>
                  {item.insurance && (
                    <p className="text-sm text-gray-600">
                      Insurance: {item.insurance.name}
                    </p>
                  )}
                  <p className="font-medium text-indigo-600 mt-2">
                    ₹{item.totalAmount}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between text-xl font-semibold">
              <span>Total</span>
              <span>₹{calculateTotal()}</span>
            </div>
          </div>

          {!showCheckout ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowCheckout(true)}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700"
            >
              Proceed to Checkout
            </motion.button>
          ) : (
            <motion.form 
              onSubmit={handleCheckout} 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="border rounded-lg px-4 py-2"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="border rounded-lg px-4 py-2"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="border rounded-lg px-4 py-2"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  className="border rounded-lg px-4 py-2"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className="border rounded-lg px-4 py-2"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="PIN Code"
                  required
                  className="border rounded-lg px-4 py-2"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
              </div>
              {!showPaymentForm ? (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type="button" // Prevent form submission
    onClick={() => setShowPaymentForm(true)} // Set state to true
    className="w-1/2 md:w-1/3 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 mt-6 mx-auto flex justify-center"
  >
    Proceed to Payment
  </motion.button>
) : (
  <PaymentForm
  orderTotal={calculateTotal()}
  onSuccess={handlePaymentSuccess} />
)}
 </motion.form>
            
       )}
   </>
      )}
     
    </motion.div>
    
  );
}

export default Cart;