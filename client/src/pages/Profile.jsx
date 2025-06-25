import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// const user = {
//   name: "Vidit Tamrakar",
//   email: "vidit@example.com",
//   number: 9354607249,
//   address: "123, Rose Villa, MG Road, Indore, Madhya Pradesh - 452001",
// };





const ProfilePage = () => {

  const [user, setUser] = useState('');

  async function fetchUser (){
    const id = localStorage.getItem('id')
    if(id){

      const data = await (await axios.get(`https://maddkit.com/wp-json/wc/v3/customers/${id}?consumer_key= ck_b0889e799c2d297ce09848972be70e5316b2bee7&consumer_secret=cs_68bfdeba8afd2aae06dab5816ac7088d0e6586bf`)).data;
      setUser(data);
    }
    else{
      window.location.href = '/login?redirects=profile'
    }
  }

  useEffect(()=>{
    fetchUser();
  },[])

  {if(user ===''){
    return(
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-[50px] sm:mt-[103px] flex items-center justify-center ">
        <h1 className="text-[1.4rem]">Fetching Details...</h1>
      </div>
    )
  } 

  else{
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-[50px] sm:mt-[103px] ">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 border">
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Profile</h2> */}
  
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <p className="mt-1 text-base font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-md">
                {user?.shipping?.first_name + user?.shipping?.last_name}
              </p>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-600">Phone Number</label>
              <p className="mt-1 text-base font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-md">
                {user?.shipping?.phone}
              </p>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-600">Email Address</label>
              <p className="mt-1 text-base font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-md">
                {user?.email}
              </p>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-600">Shipping Address</label>
              <p className="mt-1 text-base font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-md">
                {user?.shipping?.address_1 + ", "+ user?.shipping?.city + ", "+ user?.shipping?.state  + "-"+ user?.shipping?.postcode}
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
  }

  }

 
};

export default ProfilePage;
