import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FadeContent from './Fadecontent';
import '../App.css';
import axios from 'axios';

export default function Card({ img, title, price, ogprice, off, id, variations, toast, category }) {
  const navigate = useNavigate();

  function navigateProduct() {
    window.location.href = `/product?product_id=${id}`;
  }

  const [present, setPresent] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemQty, setItemQty] = useState(1);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);

    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      setPresent(true);
      setItemQty(existingItem.qty);
    }
  }, [id]);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const existingItem = updatedCart.find((item) => item.id === id);
    if (existingItem) {
      setPresent(true);
      setItemQty(existingItem.qty);
    } else {
      setPresent(false);
      setItemQty(1);
    }
  };

  const incrementQty = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decrementQty = (itemId) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === itemId ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0);
    updateCart(updatedCart);
  };

  const addToCart = () => {
    const item = {
      id,
      image: img,
      name: title,
      price,
      qty: 1,
      category,
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isAlreadyInCart = cart.some((i) => i.id === id);

    if (!isAlreadyInCart) {
      const newCart = [...cart, item];
      updateCart(newCart);
      toast();
    } else {
      alert('Product already in cart.');
    }
  };

  return (
    <FadeContent blur={false} duration={1500} easing="ease-out" initialOpacity={0}>
      <div
        onClick={navigateProduct}
        className="border sm:w-[350px] w-[160px] min-h-[300px] sm:min-h-[200px] select-none m-2 bg-[white] overflow-hidden shadow-lg flex items-start justify-center flex-col"
      >
        <div className="sm:h-[350px] sm:max-h-[350px] sm:max-w-[350px] w-[160px] h-[160px] max-h-[160px] max-w-[160px] sm:w-[350px] overflow-hidden">
          <img
            src={img}
            className="sm:h-[100%] sm:w-[100%] h-[100%] w-[100%] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
            alt=""
          />
        </div>

        <h1 className="mt-2 font-bold ml-2 text-[14px] sm:text-[18px] line-clamp-2">{title}...</h1>
        <div className="text-white sm:w-[70px] w-[70px] sm:h-[28px] h-[18px] ml-1 flex items-center justify-center">
          <h3 className="text-[#CCCCCC] sm:text-[18px] text-[15px] ml-1">★</h3>
          <h3 className="text-[#CCCCCC] sm:text-[18px] text-[15px] ml-1">★</h3>
          <h3 className="text-[#CCCCCC] sm:text-[18px] text-[15px] ml-1">★</h3>
          <h3 className="text-[#CCCCCC] sm:text-[18px] text-[15px] ml-1">★</h3>
        </div>

        <div className="flex sm:items-center sm:justify-start sm:flex-row flex-col items-center justify-center w-[100%] h-[95px] sm:h-[80px] sm:p-2 p-0">
          <div className="flex items-start w-[100%] sm:w-[50%] justify-start flex-col">
            <span className="sm:text-[18] text-[12px] font-[300] ml-2">
              {ogprice ? `${off}% Off` : ''}
            </span>
            <h3 className="sm:text-[22px] text-[18px] text-[black] font-[600] ml-2">
              <span className="line-through sm:text-[16px] text-[14px] text-[gray]">
                {ogprice ? `₹${ogprice}` : ''}
              </span>{' '}
              &nbsp;₹{price}
            </h3>
          </div>

          {!present ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart();
              }}
              className="h-[35px] sm:h-[40px] sm:w-[250px] mt-1 mb-1 sm:mb-0 sm:mt-0 w-[140px] flex items-center justify-center flex-row btn-grad text-black font-[600]"
            >
              + ADD
            </button>
          ) : (
            <div className="mt-2 flex items-center gap-2">
              <button
                className="px-5 py-0 font-[600]  bg-[#44FE42] rounded hover:bg-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  decrementQty(id);
                }}
              >
                -
              </button>
              <span>{itemQty}</span>
              <button
                className="px-5 py-0 font-[600]  bg-[#44FE42] rounded hover:bg-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  incrementQty(id);
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </FadeContent>
  );
}
