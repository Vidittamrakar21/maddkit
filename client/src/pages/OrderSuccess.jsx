// OrderSuccessPage.jsx
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';


const OrderSuccessPage = () => {

    const [searchParams] = useSearchParams();
    const items = searchParams.get("items");
    const orderid = searchParams.get("orderid");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="text-green-500 w-20 h-20" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully and will be processed soon.
        </p>

        {/* Order Summary */}
        <div className="bg-gray-50 border rounded-xl p-4 text-left mb-6">
          <h2 className="font-semibold text-gray-700 mb-2">Order Summary</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>📦 Order ID: <span className="font-medium">#{orderid}</span></li>
            <li>🛒 Items: <span className="font-medium">{items} products</span></li>
            <li>💳 Payment: <span className="font-medium">Online (Paid)</span></li>
            <li>🚚 Delivery by: <span className="font-medium">July 7, 2025</span></li>
          </ul>
        </div>

        <button
          onClick={() => window.location.href = '/'}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
