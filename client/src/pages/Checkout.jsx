import React, { useState, useEffect } from "react";
import axios from "axios";


const validCoupons = {
  SAVE100: 100,
  TENOFF: 0.1, // 10% off
};

const CheckoutPage = () => {
  const [donationChecked, setDonationChecked] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [error, setError] = useState("");
  const [cartItems, setCartItems] = useState([]);


  const DONATION_AMOUNT = 10;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalItems = cartItems?.reduce((acc, item) => acc + item.qty, 0);

  const handleApplyCoupon = () => {
    const trimmedCode = couponCode.trim().toUpperCase();
    const discount = validCoupons[trimmedCode];

    if (!discount) {
      setError("Invalid coupon code");
      setDiscountAmount(0);
      setAppliedCoupon(null);
    } else {
      setError("");
      setAppliedCoupon(trimmedCode);

      const discountValue =
        typeof discount === "number" && discount < 1
          ? totalAmount * discount
          : discount;

      setDiscountAmount(Math.floor(discountValue));
    }
  };

  const grandTotal = totalAmount - discountAmount + (donationChecked ? DONATION_AMOUNT : 0);

  useEffect(()=>{
    let id = localStorage.getItem('id');
    if(!id){
      window.location.href = '/login?redirects=checkout'
    }
  },[])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);


  const handlePayment = async () => {
    const options = {
      key: "rzp_test_E1IAZRqwdEpoFT", // From your Razorpay dashboard
      amount: grandTotal * 100, // in paise
      currency: "INR",
      name: "Maddkit",
      description: "Test Transaction",
      image: "/logo.png",
      handler: async function (response) {
        // Create WooCommerce order
        // await createWooOrder(response);
        console.log(response);
        localStorage.setItem('cart','[]')
        window.location.href = `/success?items=${totalItems}`
        
      },
      prefill: {
        name: user?.shipping?.first_name + " " + user?.shipping?.last_name || "",
        email: user?.email || "",
        contact: user?.shipping?.phone || "",
      },
      notes: {
        address: "User billing address here"
      },
      theme: {
        color: "#ED1C28"
      }
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };


  const [user, setUser] = useState('');

  async function fetchUser (){
    const id = localStorage.getItem('id')
    if(id){

      const data = await (await axios.get(`https://maddkit.com/wp-json/wc/v3/customers/${id}?consumer_key=ck_093af7accbe95ac38eadfed5c75e3e9b3baa82e6&consumer_secret=cs_97b91a6da87365fe251f05434dba14a10c02a009`)).data;
      setUser(data);
    }
   
  }

  useEffect(()=>{
    fetchUser();
  },[])

  

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-[50px] sm:mt-[103px]">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1> */}

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Billing Details */}
        <div className="flex-1 bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input type="text" defaultValue={user?.shipping?.first_name +  user?.shipping?.last_name || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input type="email" defaultValue={user?.email || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input type="text" defaultValue={user?.shipping?.phone || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Shipping Address</label>
              <textarea defaultValue={user?.shipping?.address_1 || ''} className="mt-1 w-full border rounded-lg px-4 py-2 resize-none" rows="3" />
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <input type="text" defaultValue={user?.shipping?.city || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">State</label>
              <input type="text" defaultValue={user?.shipping?.state || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Pin Code</label>
              <input type="text" defaultValue={user?.shipping?.postcode || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white shadow-md rounded-xl p-6 sticky top-20">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Order Summary</h3>

            <div className="space-y-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className=" line-clamp-1">{item.name} × {item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>

            {/* Coupon Redeem Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Have a Coupon?</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 border rounded-lg px-3 py-2 text-sm"
                />
                <button
                  onClick={handleApplyCoupon}
                  type="button"
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                >
                  Redeem
                </button>
              </div>
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
              {appliedCoupon && !error && (
                <p className="text-sm text-green-600 mt-1">Coupon "{appliedCoupon}" applied ✅</p>
              )}
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Subtotal</span>
                <span className="text-sm font-medium">₹{totalAmount}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Coupon Discount</span>
                  <span>- ₹{discountAmount}</span>
                </div>
              )}

              <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-lg">
                <input
                  type="checkbox"
                  id="donation"
                  checked={donationChecked}
                  onChange={() => setDonationChecked(!donationChecked)}
                  className="mt-1"
                />
                <strong>₹{DONATION_AMOUNT}</strong>
                <label htmlFor="donation" className="text-sm cursor-pointer">
                Be a part of someone’s happiest memory — even if you never meet them.  ❤️
                </label>
              </div>

              <div className="flex justify-between text-lg font-semibold pt-2">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button onClick={handlePayment} className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Confirm & Pay ₹{grandTotal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
