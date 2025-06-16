import React from "react";
import { FaGift, FaShareAlt } from "react-icons/fa";

const userCoins = 230;

const coupons = [
  {
    id: 1,
    title: "₹100 OFF on Orders Above ₹999",
    code: "SAVE100",
    expiry: "Expires on: 30 June 2025",
  },
  {
    id: 2,
    title: "10% OFF on All Products",
    code: "TENOFF",
    expiry: "Expires on: 10 July 2025",
  },
];

const referralCoupons = [
  {
    id: 1,
    title: "Refer & Earn 50 Coins",
    code: "REFER50",
    link: "https://madkit.com/referral/REFER50",
  },
];

const RewardPage = () => {
  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12 mt-[50px] sm:mt-[103px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Rewards</h1>

      {/* Coins Display */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8 text-center">
        <p className="text-gray-500 text-sm">Total Coins</p>
        <h2 className="text-4xl font-bold text-yellow-500">{userCoins} 🪙</h2>
      </div>

      {/* Coupons */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaGift className="text-[#ED1C28]" /> Available Coupons
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {coupon.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{coupon.expiry}</p>
              <div className="mt-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  Code: {coupon.code}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral Coupons */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaShareAlt className="text-green-500" /> Refer & Earn
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {referralCoupons.map((ref) => (
            <div
              key={ref.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {ref.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">Code: {ref.code}</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-3">
                <p className="text-sm text-gray-500 break-all">{ref.link}</p>
                <button
                  className="mt-1 sm:mt-0 bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm"
                  onClick={() => handleCopyLink(ref.link)}
                >
                  Copy Link
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardPage;
