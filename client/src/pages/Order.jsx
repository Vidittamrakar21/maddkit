import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ordersData = [
  {
    id: 1,
    name: "Birthday Party Kit",
    price: 2999,
    image: "img1.jpg",
    status: "Delivered",
  },
  {
    id: 2,
    name: "Led Light",
    price: 300,
    image: "img9.jpg",
    status: "Shipped",
  },
  {
    id: 3,
    name: "Anniversary Party Kit",
    price: 4999,
    image: "img10.jpg",
    status: "Packed",
  },
];

const StarRating = ({ onRate }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer w-5 h-5 ${
            star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => {
            setRating(star);
            onRate(star);
          }}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        />
      ))}
    </div>
  );
};

const OrderCard = ({ order }) => {
  const handleRating = (star) => {
    // alert(`You rated "${order.name}" with ${star} star(s)!`);
    // You can make API call here to submit the rating
  };

  return (
    <div className="flex flex-col md:flex-col items-start justify-start gap-4 border rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 bg-white">
      <div className="flex items-center   gap-4">
        <img src={order.image} alt={order.name} className="w-24 h-24 rounded-md object-cover" />
        <div>
          <h2 className="text-lg font-semibold">{order.name}</h2>
          <p className="text-gray-600">₹{order.price}</p>
          <p
            className={`mt-1 text-sm font-medium ${
              order.status === "Delivered"
                ? "text-green-600"
                : order.status === "Shipped"
                ? "text-blue-500"
                : "text-yellow-500"
            }`}
          >
            {order.status}
          </p>
        </div>
      </div>
      {order.status === "Delivered" && (
        <div className="mt-2 md:mt-0">
          <p className="text-sm text-gray-700 mb-1">Rate this product:</p>
          <StarRating onRate={handleRating} />
        </div>
      )}
    </div>
  );
};

const OrderPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12 mt-[50px] sm:mt-[103px]">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Orders</h1>
      <div className="space-y-6">
        {ordersData.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
