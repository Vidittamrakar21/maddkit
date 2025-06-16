import React, { useState } from "react";

const mockOrders = {
  "12345": "packed",
  "67890": "shipped",
  "98765": "delivered",
};

const getOrderProgress = (status) => {
  const steps = ["packed", "shipped", "delivered"];
  return steps.indexOf(status);
};

const OrderTrackingPage = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    const currentStatus = mockOrders[orderId.trim()];
    if (currentStatus) {
      setStatus(currentStatus);
      setNotFound(false);
    } else {
      setStatus(null);
      setNotFound(true);
    }
  };

  const steps = ["Packed", "Shipped", "Delivered"];
  const progress = getOrderProgress(status);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center justify-start mt-[50px] sm:mt-[103px]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center text-[#ED1C28] mb-6">
          Track Your Order
        </h1>

        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter your Order ID"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED1C28]"
            required
          />
          <button
            type="submit"
            className="bg-[#ED1C28] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Track
          </button>
        </form>

        {notFound && (
          <p className="text-red-600 text-center">❌ No order found for this ID</p>
        )}

        {status && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Status: <span className="text-[#ED1C28] capitalize">{status}</span>
            </h2>

            {/* Progress Bar */}
            <div className="flex justify-between items-center w-full relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center justify-evenly text-sm text-center flex-1">
                  <div
                    className={`w-8 h-8 rounded-full z-20 flex items-center justify-center font-bold text-white ${
                      index <= progress ? "bg-[#ED1C28]" : "bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="mt-2 text-gray-700">{step}</span>
                </div>
              ))}
              <div className="absolute top-4 left-[8%] right-[8%] h-1 bg-gray-200 z-0" />
              <div
                className="absolute top-4 left-[8%] h-1 bg-[#ED1C28] z-10 transition-all duration-500"
                style={{ width: `${progress * 50}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTrackingPage;
