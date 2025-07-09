// import React, { useState, useEffect } from "react";
// import axios from "axios";


// const validCoupons = {
//   SAVE100: 100,
//   TENOFF: 0.1, // 10% off
// };

// const CheckoutPage = () => {
//   const [donationChecked, setDonationChecked] = useState(false);
//   const [couponCode, setCouponCode] = useState("");
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const [appliedCoupon, setAppliedCoupon] = useState(null);
//   const [error, setError] = useState("");
//   const [cartItems, setCartItems] = useState([]);


//   const DONATION_AMOUNT = 10;

//   const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
//   const totalItems = cartItems?.reduce((acc, item) => acc + item.qty, 0);

//   const handleApplyCoupon = () => {
//     const trimmedCode = couponCode.trim().toUpperCase();
//     const discount = validCoupons[trimmedCode];

//     if (!discount) {
//       setError("Invalid coupon code");
//       setDiscountAmount(0);
//       setAppliedCoupon(null);
//     } else {
//       setError("");
//       setAppliedCoupon(trimmedCode);

//       const discountValue =
//         typeof discount === "number" && discount < 1
//           ? totalAmount * discount
//           : discount;

//       setDiscountAmount(Math.floor(discountValue));
//     }
//   };

//   const grandTotal = totalAmount - discountAmount + (donationChecked ? DONATION_AMOUNT : 0);

//   useEffect(()=>{
//     let id = localStorage.getItem('id');
//     if(!id){
//       window.location.href = '/login?redirects=checkout'
//     }
//   },[])

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);
//   }, []);


//   const handlePayment = async () => {
//     const options = {
//       key: "rzp_test_E1IAZRqwdEpoFT", // From your Razorpay dashboard
//       amount: grandTotal * 100, // in paise
//       currency: "INR",
//       name: "Maddkit",
//       description: "Test Transaction",
//       image: "/logo.png",
//       handler: async function (response) {
//         // Create WooCommerce order
//         // await createWooOrder(response);
//         console.log(response);
//         localStorage.setItem('cart','[]')
//         window.location.href = `/success?items=${totalItems}`
        
//       },
//       prefill: {
//         name: user?.shipping?.first_name + " " + user?.shipping?.last_name || "",
//         email: user?.email || "",
//         contact: user?.shipping?.phone || "",
//       },
//       notes: {
//         address: "User billing address here"
//       },
//       theme: {
//         color: "#ED1C28"
//       }
//     };
  
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };


//   const [user, setUser] = useState('');

//   async function fetchUser (){
//     const id = localStorage.getItem('id')
//     if(id){

//       const data = await (await axios.get(`https://maddkit.com/wp-json/wc/v3/customers/${id}?consumer_key=ck_093af7accbe95ac38eadfed5c75e3e9b3baa82e6&consumer_secret=cs_97b91a6da87365fe251f05434dba14a10c02a009`)).data;
//       setUser(data);
//     }
   
//   }

//   useEffect(()=>{
//     fetchUser();
//   },[])

  

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 mt-[50px] sm:mt-[103px]">
//       {/* <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1> */}

//       <div className="flex flex-col lg:flex-row gap-10">
//         {/* Billing Details */}
//         <div className="flex-1 bg-white shadow rounded-xl p-6">
//           <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium">Full Name</label>
//               <input type="text" defaultValue={user?.shipping?.first_name +  user?.shipping?.last_name || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Email Address</label>
//               <input type="email" defaultValue={user?.email || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Phone Number</label>
//               <input type="text" defaultValue={user?.shipping?.phone || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Shipping Address</label>
//               <textarea defaultValue={user?.shipping?.address_1 || ''} className="mt-1 w-full border rounded-lg px-4 py-2 resize-none" rows="3" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">City</label>
//               <input type="text" defaultValue={user?.shipping?.city || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">State</label>
//               <input type="text" defaultValue={user?.shipping?.state || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Pin Code</label>
//               <input type="text" defaultValue={user?.shipping?.postcode || ''} className="mt-1 w-full border rounded-lg px-4 py-2" />
//             </div>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className="w-full lg:w-1/3">
//           <div className="bg-white shadow-md rounded-xl p-6 sticky top-20">
//             <h3 className="text-xl font-semibold mb-4 border-b pb-2">Order Summary</h3>

//             <div className="space-y-2 mb-4">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex justify-between text-sm">
//                   <span className=" line-clamp-1">{item.name} × {item.qty}</span>
//                   <span>₹{item.price * item.qty}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Coupon Redeem Section */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Have a Coupon?</label>
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={couponCode}
//                   onChange={(e) => setCouponCode(e.target.value)}
//                   placeholder="Enter coupon code"
//                   className="flex-1 border rounded-lg px-3 py-2 text-sm"
//                 />
//                 <button
//                   onClick={handleApplyCoupon}
//                   type="button"
//                   className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
//                 >
//                   Redeem
//                 </button>
//               </div>
//               {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
//               {appliedCoupon && !error && (
//                 <p className="text-sm text-green-600 mt-1">Coupon "{appliedCoupon}" applied ✅</p>
//               )}
//             </div>

//             <div className="border-t pt-4 space-y-3">
//               <div className="flex justify-between">
//                 <span className="text-sm">Subtotal</span>
//                 <span className="text-sm font-medium">₹{totalAmount}</span>
//               </div>

//               {discountAmount > 0 && (
//                 <div className="flex justify-between text-sm text-green-600">
//                   <span>Coupon Discount</span>
//                   <span>- ₹{discountAmount}</span>
//                 </div>
//               )}

//               <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-lg">
//                 <input
//                   type="checkbox"
//                   id="donation"
//                   checked={donationChecked}
//                   onChange={() => setDonationChecked(!donationChecked)}
//                   className="mt-1"
//                 />
//                 <strong>₹{DONATION_AMOUNT}</strong>
//                 <label htmlFor="donation" className="text-sm cursor-pointer">
//                 Be a part of someone’s happiest memory — even if you never meet them.  ❤️
//                 </label>
//               </div>

//               <div className="flex justify-between text-lg font-semibold pt-2">
//                 <span>Total</span>
//                 <span>₹{grandTotal}</span>
//               </div>
//             </div>

//             <button onClick={handlePayment} className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
//               Confirm & Pay ₹{grandTotal}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


import React, { useState, useEffect ,useRef } from 'react';
import axios from 'axios';

const validCoupons = {
  SAVE100: 100,
  TENOFF: 0.1,
};

const CheckoutPage = () => {
  const [donationChecked, setDonationChecked] = useState(false);
  const [specialChecked, setspecialChecked] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [error, setError] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState('');
  const [related, setRelated] = useState([]);
  const [loader, setLoader] = useState(false);

  const firstname = useRef(null);
  const lastname = useRef(null);
  const phonenumber =useRef(null);
  const state =useRef(null);
  const city =useRef(null);
  const postcode =useRef(null);
  const add =useRef(null);

  const DONATION_AMOUNT = 10;
  const DELIVERY_CHARGE = 30;
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const grandTotal = totalAmount - discountAmount + (donationChecked ? DONATION_AMOUNT : 0) ;
  const totalSavings = discountAmount + DELIVERY_CHARGE;

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) window.location.href = '/login?redirects=checkout';
    else fetchUser(id);
  }, []);

  const fetchUser = async (id) => {
    const { data } = await axios.get(
      `https://maddkit.com/wp-json/wc/v3/customers/${id}?consumer_key=ck_093af7accbe95ac38eadfed5c75e3e9b3baa82e6&consumer_secret=cs_97b91a6da87365fe251f05434dba14a10c02a009`
    );
    setUser(data);
  };

  async function fetchRelated(){
    const relatedProducts = await (await axios.get(`https://maddkit.com/wp-json/wc/v3/products?include=7142,7151,6459,7123,6406&per_page=4&consumer_key=ck_093af7accbe95ac38eadfed5c75e3e9b3baa82e6&consumer_secret=cs_97b91a6da87365fe251f05434dba14a10c02a009`)).data;
    setRelated(relatedProducts)
  }

  useEffect(() => {
    fetchRelated();
  }, []);


  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);

    setspecialChecked(cart?.some(item=> item.id === '#'))
  }, []);

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    const discount = validCoupons[code];

    if (!discount) {
      setError('Invalid coupon');
      setDiscountAmount(0);
      setAppliedCoupon(null);
    } else {
      setError('');
      setAppliedCoupon(code);
      const value = typeof discount === 'number' && discount < 1 ? totalAmount * discount : discount;
      setDiscountAmount(Math.floor(value));
    }
  };

  const createWooOrder = async (razorpayResponse) => {
    setLoader(true)
    const orderData = {
      customer_id: user.id,
      payment_method: "razorpay",
      payment_method_title: "Razorpay",
      set_paid: true, // mark as paid since payment was done
      billing: {
        first_name:  firstname.current.value,
        last_name: lastname.current.value,
        email: user.email,
        phone: phonenumber.current.value,
        address_1: add.current.value,
        city: city.current.value,
        state: state.current.value,
        postcode: postcode.current.value,
        country: "India",
      },
      shipping: {
        first_name:  firstname.current.value,
        last_name: lastname.current.value,
        phone: phonenumber.current.value,
        address_1: add.current.value,
        city: city.current.value,
        state: state.current.value,
        postcode: postcode.current.value,
        country: "India",
      },
      line_items: cartItems.map(item => ({
        product_id: item.id,
        quantity: item.quantity
      })),
      fee_lines: [
        {
          name: "Total Discount",
          total: `-${discountAmount}`
        }
      ],
      meta_data: [
        {
          key: 'razorpay_payment_id',
          value: razorpayResponse.razorpay_payment_id
        },
        {
          key: "final_checkout_amount",
          value: grandTotal
        },
        {
          key: "discount_applied",
          value: discountAmount
        }
      ]
    };
  
    const auth = btoa("ck_b0889e799c2d297ce09848972be70e5316b2bee7:cs_68bfdeba8afd2aae06dab5816ac7088d0e6586bf"); // use a key pair with write access
  
    const res = await fetch("https://maddkit.com/wp-json/wc/v3/orders", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${auth}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });
  
    const order = await res.json();
    console.log("WooCommerce Order Created:", order);
    setLoader(false)
     window.location.href = `/success?items=${totalItems}&orderid=${order.id}`;
  };
  

  const handlePayment = async () => {
    const options = {
      key: 'rzp_test_E1IAZRqwdEpoFT',
      // key: 'rzp_live_GyzsSD6XQ1rTJv',
      amount: grandTotal * 100,
      currency: 'INR',
      name: 'Maddkit',
      image: '/logo.png',
      handler: async function (response) {
        localStorage.setItem('cart', '[]');
        // console.log(response);
        await createWooOrder(response);
       
      },
      prefill: {
        name: firstname.current.value + ' ' + lastname.current.value,
        email: user?.email,
        contact: phonenumber.current.value,
      },
      theme: {
        color: '#ED1C28',
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };



  function addMoreProduct(obj){
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(obj)
    localStorage.setItem('cart',JSON.stringify(cart));
    setCartItems((prev)=> prev.concat(obj))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 mt-[50px] sm:mt-[103px] select-none">
      {loader ===true ?
      <div className='fixed z-40 top-0 bottom-0 left-0 right-0 bg-white flex items-center justify-center'>
      <h1>Proccessing Your Order....</h1>
      
    </div>:<></>
      }
      {/* Special Deal Section */}
      {specialChecked=== false?
      <div className="bg-white p-4 rounded-xl shadow mb-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="https://www.bluestarempire.com/files/product/large/519934.jpg" alt="deal" className="w-16 h-16 object-cover rounded border" />
        <div>
          <p className="text-sm font-semibold">Mulicolour Balloon Packet - Big Size(50 pcs)</p>
          <p className="text-xs text-gray-500">1 unit <span className="line-through ml-2">₹100</span> <span className="font-bold text-green-600 ml-1">₹49</span></p>
          <p className="text-xs text-purple-600 mt-1">🎉 Special deal unlocked. Add this item to your cart</p>
        </div>
      </div>
      <button onClick={()=>{ alert("Product Added!"); setspecialChecked(true); addMoreProduct({
      id: '#',
      image: "https://www.bluestarempire.com/files/product/large/519934.jpg",
      name: "Mulicolour Balloon Packet - Big Size(50 pcs)",
      price: 49,
      qty: 1,
      category: ""
    })}} className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-lg">Add</button>
    </div>:<></>}

      {/* You Might Also Like */}
     {related.length!==0?
      <>
       <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-3">You might also like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {related?.map((item, idx) => (
            <div key={idx} onClick={()=> { window.location.href = `/product?product_id=${item.id}`}}  className="border p-2 rounded-lg">
              <img src={item.images[0]?.src} alt={item.name} className="h-24 w-full object-cover rounded" />
              <p className="text-sm font-medium mt-2 line-clamp-1">{item.name}</p>
              <p className="text-xs text-gray-500 line-through">₹{item.regular_price}</p>
              <p className="text-sm text-green-700 font-semibold">₹{item.price}</p>
              <button onClick={(e)=>{
              e.stopPropagation();
              addMoreProduct({
                id: item.id,
                image: item.images[0]?.src,
                name: item.name,
                price: item.price,
                qty: 1,
                category: ""
              });
            }} className="mt-1 w-full text-sm bg-green-600 text-white py-1 rounded hover:bg-green-700">Add</button>
            </div>
          ))}
        </div>
      </div>

          <div onClick={()=>{window.location.href = '/allproducts'}} className="mt-4 ml-3 text-left bg-[#c9c9c96b] p-2">
            <button className="text-sm text-black ">See more products like this  ---&gt;</button>
          </div>
      </>:<></> 
    }


      <div className="grid lg:grid-cols-3 gap-6">
        {/* Billing Section */}
        <div className="lg:col-span-2  bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input ref={firstname} type="text" defaultValue={user?.shipping?.first_name} placeholder="First Name" className="border px-4 py-2 rounded w-full" />
            <input ref={lastname} type="text" defaultValue={user?.shipping?.last_name} placeholder="Last Name" className="border px-4 py-2 rounded w-full" />
            <input type="email" defaultValue={user?.email || ''} placeholder="Email Address" className="border px-4 py-2 rounded w-full" />
            <input ref={phonenumber} type="number" defaultValue={user?.shipping?.phone || ''} placeholder="Phone Number" className="border px-4 py-2 rounded w-full" />
            <input ref={city} type="text" defaultValue={user?.shipping?.city || ''} placeholder="City" className="border px-4 py-2 rounded w-full" />
            <input ref={state} type="text" defaultValue={user?.shipping?.state || ''} placeholder="State" className="border px-4 py-2 rounded w-full" />
            <input ref={postcode} type="text" defaultValue={user?.shipping?.postcode || ''} placeholder="Pin Code" className="border px-4 py-2 rounded w-full" />
            <textarea ref={add} defaultValue={user?.shipping?.address_1 || ''} placeholder="Shipping Address" className="border px-4 py-2 rounded w-full md:col-span-2 resize-none" rows="3" />
          </form>
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1 order-1 lg:order-2 bg-white p-4 rounded-xl shadow sticky top-20">
          <h2 className="text-xl font-semibold mb-4">Order Summary ({totalItems})</h2>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3 border-b pb-3">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded object-cover border" />
                <div className="flex-1">
                  <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                  {item.sale && (
                    <p className="text-xs text-red-500 font-semibold">SALE: {item.sale}</p>
                  )}
                </div>
                <p className="text-sm">₹{item.price * item.qty}</p>
              </li>
            ))}

        
          </ul>

          
          {/* FREE Delivery Coupon Message */}
          <div className="bg-yellow-50 text-yellow-800 p-2 rounded text-sm flex items-center gap-2 mt-6">
            <span className="text-lg">🎉</span>
            <span>Yay! You will earn <strong>100 coins</strong> — On this order.</span>
          </div>
          

          {/* Coupon Section */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Apply Coupon</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="border px-3 py-2 rounded w-full"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter code"
              />
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={handleApplyCoupon}
              >
                Apply
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {appliedCoupon && !error && (
              <p className="text-green-600 text-sm mt-1">Coupon "{appliedCoupon}" applied</p>
            )}
          </div>

          {/* Donation */}
          <div className="mt-6 bg-gray-100 p-3 rounded-lg flex items-center gap-3">
            <input
              type="checkbox"
              id="donation"
              checked={donationChecked}
              onChange={() => setDonationChecked(!donationChecked)}
              className="mt-1"
            />
            <label htmlFor="donation" className="text-sm cursor-pointer">
            Be a part of someone’s happiest memory — even if you never meet them.  ❤️
            </label>
          </div>

          {/* Totals */}
          <div className="space-y-2 mt-6 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalAmount}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>- ₹{discountAmount}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="line-through text-gray-400">₹{DELIVERY_CHARGE}</span>
            </div>
            {donationChecked && (
              <div className="flex justify-between">
                <span>Donation</span>
                <span>+ ₹{DONATION_AMOUNT}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>
            <div className="text-xs text-green-600 mt-2">
              🎉 You saved ₹{totalSavings} on this order!
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Confirm & Pay ₹{grandTotal}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;



