import React, { useState, useEffect } from 'react';
import Stepper, { Step } from '@/components/Stepper';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { ShoppingBag } from 'lucide-react';

export default function BuildKit() {
  const category = ['Backdrop Bliss', 'Light It Up', 'Message Pop', 'Fun & Fillers', 'Party Gear', 'Game Zone'];
  const categoryId = [53, 54, 55, 56, 57, 58];

  const [kitStep, setStep] = useState(() => {
    const savedStep = localStorage.getItem('buildKitStep');
    return savedStep ? parseInt(savedStep) : 1;
  });

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  
  function fetchCart(){
    let crt = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(crt);
  }

  useEffect(()=>{
    fetchCart()
  },[])

  function handleToast() {
    // toast('Item Added To Cart!', {
    //   position: "bottom-center",
    //   autoClose: 3000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   theme: "light",
    //   transition: Bounce,
    // });
  }

  async function fetchProduct() {
    try {
      const response = await axios.get(
        `https://maddkit.com/wp-json/wc/v3/products?category=${categoryId[kitStep - 1]}&per_page=50&consumer_key=ck_093af7accbe95ac38eadfed5c75e3e9b3baa82e6&consumer_secret=cs_97b91a6da87365fe251f05434dba14a10c02a009`
      );
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  }

  useEffect(() => {
    fetchProduct();
    localStorage.setItem('buildKitStep', kitStep);
  }, [kitStep]);

  return (
    <div className='min-h-[100vh] w-[100%] flex items-center justify-start flex-col overflow-hidden select-none'>
      <ToastContainer />

   


      <Stepper
        initialStep={kitStep}
        onStepChange={(step) => {
          setProducts([]);
          setStep(step);
          localStorage.setItem('buildKitStep', step); // persist to localStorage
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Prev"
        nextButtonText="Next"
      >
        {category.map((cat, i) => (
          <Step key={i}>
            <h1 className='font-[600] mt-3 sm:text-[22px] text-[22px] font5'>{`${i + 1}. ${cat}`}</h1>
            <p>{stepDescriptions[i]}</p>
          </Step>
        ))}
      </Stepper>

      <section className='sm:w-[80%] w-[96%] min-h-[500px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-6  sm:mt-[50px] mt-0'>
        {products.length !== 0 ? (
          products.map((item, index) => (
            <Card
              key={index}
              img={item.images[0]?.src}
              toast={handleToast}
              price={item.price}
              ogprice={item.regular_price}
              title={item.name}
              off={Math.round(((Number(item.regular_price) - Number(item.price)) / Number(item.regular_price)) * 100)}
              id={item.id}
              variations={item.variations}
              category={category[kitStep - 1]}
            />
          ))
        ) : (
          Array(4).fill(0).map((_, i) => <SkeletonCard key={i} />)
        )}
      </section>

      <Footer />
    </div>
  );
}

const stepDescriptions = [
  '"Set the stage for your story."',
  '"Illuminate the moments that matter."',
  '"Say it loud, say it proud."',
  '"Add the sparkles of joy."',
  '"Dress the part, play the part."',
  '"Engage, laugh, and bond."',
];

function SkeletonCard() {
  return (
    <div role="status" className="max-w-sm p-4 border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-48 w-24 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 sm:block hidden"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 sm:block hidden"></div>
      <div className="flex items-center mt-4">
        <div className='flex sm:items-center items-start sm:justify-center justify-start  sm:flex-row flex-col'>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
          <div className="sm:w-48 w-32 sm:h-[40px] h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 sm:ml-4"></div>
        </div>
      </div>
    </div>
  );
}
