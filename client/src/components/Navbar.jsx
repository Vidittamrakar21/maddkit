import React from 'react'
import '../App.css'
import RotatingText from './RotatingText'
import { useState , useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import { FaShoppingCart } from "react-icons/fa"; 
import { FiShoppingCart } from "react-icons/fi";
import {User ,Search , ShoppingBag , MenuIcon} from 'lucide-react'

export default function Navbar() {
 
  function navigateHome(){
    window.location.href = '/'
 }

 const [sideBar, openSideBar] = useState(false);
 const [shopOpen, setShopOpen] = useState(false);
 const [OrderOpen, setOrderOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const [totalItems, setTotalItems] = useState(3);


    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [path,setpath] = useState('')

    const location = useLocation();


function useCurrentPath() {

  if(location.pathname === '/'){
    setpath('home');
  }
  else if(location.pathname === '/cart'){
    setpath('cart');
  }

  else if(location.pathname === '/product'){
    setpath('product');
  }
  else if(location.pathname === '/build-kit'){
    setpath('build-kit');
  }
  else if(location.pathname === '/premade-kit'){
    setpath('premade-kit');
  }
  else if(location.pathname === '/search'){
    setpath('search');
  }
  else if(location.pathname === '/allproducts'){
    setpath('allproducts');
  }
  else if(location.pathname === '/checkout'){
    setpath('checkout');
  }
  else if(location.pathname === '/orders'){
    setpath('orders');
  }
  else if(location.pathname === '/rewards'){
    setpath('rewards');
  }
  else if(location.pathname === '/profile'){
    setpath('profile');
  }
  else if(location.pathname === '/trackorder'){
    setpath('trackorder');
  }
  else if(location.pathname === '/login'){
    setpath('login');
  }
 
}

useEffect(()=>{
useCurrentPath();
},[location.pathname])

  const [logged, setLoggged] = useState(false);

  useEffect(()=>{
    let id = localStorage.getItem('id');
    if(id){
      setLoggged(true);
    }
    else{
      setLoggged(false);
    }
  },[])


  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    setTotalItems(count);
  }, []);

  return (
    <>
    <div className=' border-b border-b-[#313131] select-none fixed w-[100%] z-50  h-[25px] sm:h-[28px] flex top-0 items-center justify-center bg-[black] text-white'>
    
      <RotatingText
  texts={['FREE SHIPPING ON ORDERS OVER ₹1999', 'Sale is LIVE Flat 50% OFF']}
  mainClassName="px-2 sm:px-2 md:px-3   text-white text-[0.7rem] sm:text-[0.9rem] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 500 }}
  rotationInterval={2000}
/>
    </div>
    <nav className={path === 'home'?` select-none w-[100%] z-50  h-[50px] sm:h-[90px] ${scrolled ===true?'sm:bg-[black] bg-[black] transition-colors duration-700 ease-in-out':'bg-[#ED1C28] sm:bg-[#ED1C28]  transition-colors duration-700 ease-in-out'}  fixed sm:top-[28px] top-[25px]    flex sm:items-center sm:justify-between items-center justify-between sm:flex-row flex-row`:` select-none w-[100%] z-50  h-[50px] sm:h-[90px] sm:bg-[white] bg-[white] shadow-lg   fixed sm:top-[28px] top-[25px]    flex sm:items-center sm:justify-between items-center justify-between sm:flex-row flex-row`}>
      <div onClick={navigateHome} className={path==='home'?`text-[white]  flex items-center justify-center sm:h-[80px] sm:w-[180px] flex-col sm:ml-8 ml-3 `:'text-[#ED1C28]  flex items-center justify-center sm:h-[80px] sm:w-[180px] flex-col sm:ml-8 ml-3 '}>
       <h1 className='font-custom sm:text-[2.4rem] text-[1.6rem]  sm:mb-[-10px] mb-[0px] '>MADDKIT</h1>
       <h6 className=' font2 sm:text-[1.5rem] sm:block hidden '>Party Essentials</h6>
       </div>

      

  

        <ul className={`sm:w-[400px]  sm:h-[50px] sm:flex sm:items-center sm:justify-evenly ${path === 'home'? 'text-white':'text-[black]'} sm:text-[16px] sm:font-[600] hidden`}>
       
        <li onClick={()=>{window.location.href = '/'}} className={path === 'home'? 'underline':''}>Home</li>
        <li onClick={()=>{window.location.href = '/premade-kit'}} className={path === 'premade-kit'? 'underline':''}>Party Kits</li>
        <li onClick={()=>{window.location.href = '/allproducts'}} className={path === 'allproducts'? 'underline':''}>All Products</li>
       </ul>

        <div className='sm:w-[170px]   w-[160px]  sm:mr-[60px] mr-[0px]  h-[50px]  flex items-center justify-evenly '>

       
        <Search onClick={()=>{window.location.href = '/search'}} className={`  ${path === 'home'?'text-white':'text-black'}`} size={22} />
      
        <User onClick={()=>{if(logged === true){window.location.href = '/account'} else{window.location.href = '/login?redirects=account'}}}  className={`  ${path === 'home'?'text-white':'text-black'}`} size={22} />
  
        <div className="relative cursor-pointer" onClick={() => window.location.href = "/cart"}>
    
        <ShoppingBag className={`  ${path === 'home'?'text-white':'text-black'}`} size={22} />

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
            {totalItems}
          </span>
        )}
      </div>

        <MenuIcon onClick={()=>{openSideBar(true)}}  className={`  ${path === 'home'?'text-white':'text-black'}`} size={22} />
       
        </div>
     
    </nav>
      
      {sideBar && (<div className="fixed inset-0 bg-black bg-opacity-40 z-50"/>)}
        <div  className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${
          sideBar ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className='h-[30px] select-none w-[100%] flex items-center justify-end mt-3'>
          <svg onClick={()=>openSideBar(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className='mr-3' viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
          </div>

          <nav className="p-4 space-y-2 text-gray-700">
          <a href="/" className="block px-2 py-2 rounded hover:bg-gray-100">
            Home
          </a>

          {/* Shop with dropdown */}
          <div className="px-2">
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="w-full flex items-center justify-between py-2 rounded hover:bg-gray-100"
            >
              <span>Shop</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" className={`transition-transform duration-200 ${shopOpen ? 'rotate-180' : ''}`} viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
 
            </button>
            {shopOpen && (
              <div className="ml-4 mt-1 space-y-1 text-sm text-gray-600">
                <a href="/premade-kit" className="block px-2 py-1 rounded hover:bg-gray-100">
                  Party Kits
                </a>
              
                <a href="/allproducts" className="block px-2 py-1 rounded hover:bg-gray-100">
                  All Products
                </a>
              </div>
            )}
          </div>


            {/* Order with dropdown */}
            <div className="px-2">
            <button
              onClick={() => setOrderOpen(!OrderOpen)}
              className="w-full flex items-center justify-between py-2 rounded hover:bg-gray-100"
            >
              <span>Categories</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" className={`transition-transform duration-200 ${shopOpen ? 'rotate-180' : ''}`} viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
 
            </button>
            {OrderOpen && (
              <div className="ml-4 mt-1 space-y-1 text-sm text-gray-600">
                <a href="/category?id=53" className="block px-2 py-1 rounded hover:bg-gray-100">
                  Backdrop Bliss
                </a>
                <a href="/category?id=54" className="block px-2 py-1 rounded hover:bg-gray-100">
                  Light It Up
                </a>
                <a href="/category?id=55" className="block px-2 py-1 rounded hover:bg-gray-100">
                  Message Pop
                </a>
                <a href="/category?id=56" className="block px-2 py-1 rounded hover:bg-gray-100">
                  Fun & Fillers
                </a>
                <a href="/category?id=57" className="block px-2 py-1 rounded hover:bg-gray-100">
                  Party Gear
                </a>
                <a href="/category?id=58" className="block px-2 py-1 rounded hover:bg-gray-100">
                  Game Zone
                </a>
              
              
              </div>
            )}
          </div>

        
          
         

          {logged === true ?
             <a href="/" onClick={()=>{localStorage.clear()}} className="block px-2 py-2 rounded hover:bg-red-100 text-red-600">
             Log Out
           </a>:
            <a href="/login?redirects=" className="block px-2 py-2 rounded hover:bg-gray-100">
            Log In
          </a>
          }
         
        </nav>

        </div>
      
      
    </>
  )
}
