import React, { useEffect, useState } from "react";
const categoryId = [53, 54, 55, 56, 57, 58]
const categories = [
  "Backdrop Bliss",
  "Message Pop",
  "Light It Up",
  "Fun & Fillers",
  "Party Gear",
  "Game Zone",
];

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Update localStorage when cartItems change
  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const incrementQty = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decrementQty = (itemId) => {
    let updatedCart = cartItems
      .map((item) =>
        item.id === itemId ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0); // remove item if qty is 0
    updateCart(updatedCart);
  };

  const totalAmount = cartItems?.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const totalItems = cartItems?.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-[50px] sm:mt-[103px]">
      {cartItems.length !== 0 ? (
        <>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Cart Items */}
            <div className="flex-1 ">
              {categories.map((category) => {
                const items = cartItems?.filter(
                  (item) => item.category === category
                );
                if (items?.length === 0) return null;

                return (
                  <div key={category} className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
                      {category}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {items?.map((item) => (
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
                              <h3 className="text-lg font-semibold line-clamp-2">
                                {item.name}
                              </h3>
                              <p className="text-gray-600 mt-1">₹{item.price}</p>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                              <button
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                onClick={() => decrementQty(item.id)}
                              >
                                -
                              </button>
                              <span>{item.qty}</span>
                              <button
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                onClick={() => incrementQty(item.id)}
                              >
                                +
                              </button>
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
              <div className="bg-white shadow-md rounded-xl p-6 sticky sm:top-[103px] top-[60px] border">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                  Cart Summary
                </h3>
                <div className="flex justify-between mb-2">
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mb-4">
                  <span>Subtotal</span>
                  <span>₹{totalAmount}</span>
                </div>
                <button
                  onClick={() => {
                    window.location.href = "/checkout";
                  }}
                  className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className=" text-center">No items in the cart!</h1>
        </>
      )}
    </div>
  );
};

export default Cart;
