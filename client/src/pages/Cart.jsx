import React from "react";

const cartItems = [
  { id: 1, name: "Backdrop 1", price: 899, category: "Backdrop Bliss", image: "https://via.placeholder.com/150", qty: 1 },
  { id: 7, name: "Backdrop 2", price: 899, category: "Backdrop Bliss", image: "https://via.placeholder.com/150", qty: 1 },
  { id: 2, name: "Message Board", price: 299, category: "Message Pop", image: "https://via.placeholder.com/150", qty: 2 },
  { id: 3, name: "LED Strip", price: 499, category: "Light It Up", image: "https://via.placeholder.com/150", qty: 1 },
  { id: 4, name: "Confetti Pack", price: 199, category: "Fun & Fillers", image: "https://via.placeholder.com/150", qty: 3 },
  { id: 5, name: "Party Hats", price: 149, category: "Party Gear", image: "https://via.placeholder.com/150", qty: 4 },
  { id: 8, name: "Party Hats", price: 149, category: "Party Gear", image: "https://via.placeholder.com/150", qty: 4 },
  { id: 9, name: "Party Hats", price: 149, category: "Party Gear", image: "https://via.placeholder.com/150", qty: 4 },
  { id: 6, name: "Ring Toss", price: 699, category: "Game Zone", image: "https://via.placeholder.com/150", qty: 1 },
];

const categories = [
  "Backdrop Bliss",
  "Message Pop",
  "Light It Up",
  "Fun & Fillers",
  "Party Gear",
  "Game Zone",
];

const Cart = () => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-[50px] sm:mt-[103px]">
      <h1 className="text-3xl font-bold mb-8 text-center ">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Cart Items */}
        <div className="flex-1 ">
          {categories.map((category) => {
            const items = cartItems.filter((item) => item.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category} className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white shadow rounded-xl p-4 flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-gray-600 mt-1">₹{item.price}</p>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                          <span>{item.qty}</span>
                          <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side - Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white shadow-md rounded-xl p-6 sticky top-20">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Cart Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Subtotal</span>
              <span>₹{totalAmount}</span>
            </div>
            <button onClick={()=>{window.location.href = '/checkout'}} className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
