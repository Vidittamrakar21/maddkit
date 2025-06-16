import React from "react";

const user = {
  name: "Vidit Tamrakar",
  email: "vidit@example.com",
  address: "123, Rose Villa, MG Road, Indore, Madhya Pradesh - 452001",
};

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-[50px] sm:mt-[103px]">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Profile</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <p className="mt-1 text-base font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-md">
              {user.name}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email Address</label>
            <p className="mt-1 text-base font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-md">
              {user.email}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Shipping Address</label>
            <p className="mt-1 text-base font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-md">
              {user.address}
            </p>
          </div>
        </div>

        {/* <div className="mt-8 flex justify-center">
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Edit Profile
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProfilePage;
