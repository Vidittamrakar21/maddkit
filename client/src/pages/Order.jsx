import React, { useState,useEffect, use } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

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
          className={`cursor-pointer sm:w-4 sm:h-4 h-3 w-3 ${
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

  function formatDateToMMDDYYYY(dateString) {
    const date = new Date(dateString);
  
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }


  const handleRating = (star) => {
    // alert(`You rated "${order.name}" with ${star} star(s)!`);
    // You can make API call here to submit the rating
  };

  return (
    <div className="flex flex-col md:flex-col items-start justify-start gap-4 border rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 bg-white">
      {(order.line_items).map((item, index)=>(
        <>
        <div key={index} className="flex items-center   gap-4">
        <img src={item.image.src} alt={''} className="w-14 h-14 min-h-14 min-w-14 max-h-14 max-w-14  rounded-md object-cover" />
        <div>
          <h2 className="text-sm font-semibold line-clamp-2">{item.name}</h2>
          <p className="text-gray-600">₹{item.price}</p>
          {/* <p
            className={`mt-1 text-sm font-medium ${
              order.status === "Delivered"
                ? "text-green-600"
                : order.status === "Shipped"
                ? "text-blue-500"
                : "text-yellow-500"
            }`}
          >
            {order.status}
          </p> */}
        </div>
      </div>
       <div className="mt-2 md:mt-0">
       <p className="text-sm text-gray-700 mb-1">Rate this product:</p>
       <StarRating onRate={handleRating} />
     </div>
     </>
      ))
      
      }

<p className="text-sm text-gray-700 mb-1 font-bold">Total: ₹{order.total}</p>
<p className="text-sm text-gray-700 mb-1 font-bold">Date: {formatDateToMMDDYYYY(order.date_created)}</p>
      
    </div>
  );
};

const OrderPage = () => {

  const [orderdata, setorderdata] = useState([]);
  const [madeorders, setmadeorder] = useState(true);
  async function fetchOrder(){
    let id = localStorage.getItem('id')
    if(id){
      const data = await (await axios.get(`https://maddkit.com/wp-json/wc/v3/orders?customer=${id}&consumer_key=ck_093af7accbe95ac38eadfed5c75e3e9b3baa82e6&consumer_secret=cs_97b91a6da87365fe251f05434dba14a10c02a009`)).data;
      if(data?.length !== 0){
        setorderdata(data);
        setmadeorder(true)
      }
      else{
        setmadeorder(false)
      }
    }
    else{
      window.location.href = '/login?redirects=orders'
    }
  }

  useEffect(()=>{
    fetchOrder()
  },[])

  if(orderdata.length === 0 && madeorders === true){
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12 mt-[50px] sm:mt-[103px] flex items-center justify-center">
          <h1>Fetching Order Details...</h1>
      </div>

    )
  }
  else if(orderdata.length === 0 && madeorders === false){
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12 mt-[50px] sm:mt-[103px] flex items-center justify-center">
       <div className="flex items-center justify-center flex-col">
       <h1>No Orders Yet!</h1>
       <button onClick={()=>{window.location.href = '/allproducts'}} className="h-[35px] w-[110px] text-white bg-[#ED1C28] mt-4">Shop Now!</button>
       </div>
      </div>

    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12 mt-[50px] sm:mt-[103px]">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Orders</h1>
      <div className="space-y-6">
        {orderdata.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
