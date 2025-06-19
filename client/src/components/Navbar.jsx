import React from 'react'
import '../App.css'
import RotatingText from './RotatingText'
import { useState , useEffect } from 'react'
import { useLocation } from 'react-router-dom'


export default function Navbar() {
 
  function navigateHome(){
    window.location.href = '/'
 }

 const [sideBar, openSideBar] = useState(false);
 const [shopOpen, setShopOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);

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
        {/* <div className='flex items-center justify-center sm:ml-[60px] ml-0 sm:mt-6 border '> */}
        {/* <img onClick={navigateHome} src="logo2.png"  className='sm:h-[60px] h-[60px] sm:w-[180px] w-[110px] sm:ml-8 ml-2' alt="" /> */}
       <div onClick={navigateHome} className={path==='home'?`text-[white]  flex items-center justify-center sm:h-[80px] sm:w-[180px] flex-col sm:ml-8 ml-3 `:'text-[#ED1C28]  flex items-center justify-center sm:h-[80px] sm:w-[180px] flex-col sm:ml-8 ml-3 '}>
       <h1 className='font-custom sm:text-[2.4rem] text-[1.6rem]  sm:mb-[-10px] mb-[0px] '>MADDKIT</h1>
       <h6 className=' font2 sm:text-[1.5rem] sm:block hidden '>Party Essentials</h6>
       </div>

      

        {/* <div className='sm:flex sm:items-center sm:justify-center sm:ml-6 hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" class="relative left-7" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>   
         <input type="text" placeholder='&nbsp;What are you looking for?' className='p-7 h-[45px]   bg-[#F5F5F5] w-[350px]  rounded-[30px] placeholder:text-[#282e33]' name="" id="" />
        </div> */}
        {/* </div> */}

        <ul className={`sm:w-[400px] sm:h-[50px] sm:flex sm:items-center sm:justify-evenly ${path === 'home'? 'text-white':'text-[black]'} sm:text-[16px] sm:font-[600] hidden`}>
       
        <li onClick={()=>{window.location.href = '/premade-kit'}}>Premade Kits</li>
        <li onClick={()=>{window.location.href = '/build-kit'}}>Custom Kits</li>
        <li onClick={()=>{window.location.href = '/allproducts'}}>All Products</li>
       </ul>

        <div className='sm:w-[200px]  w-[160px]  sm:mr-[60px] mr-[0px]  h-[50px]  flex items-center justify-evenly '>

        {/* <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className='sm:hidden block' viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg> */}

        <svg  onClick={()=>{window.location.href = '/search'}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill={path==='home'?'white':'black'} class="" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>   

         {/* <div className='flex items-center justify-center hover:bg-[#DFDFDF] sm:w-[40px] w-[40px]   h-[35px] rounded-[25px]'> */}
         {/* <svg onClick={()=>openSideBar(true)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg> */}
        <svg onClick={()=>openSideBar(true)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={path==='home'?'white':'black'} class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
      </svg>
      
          
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="rounded-xl  " viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
        </svg> */}
        
        <svg onClick={()=>{window.location.href = '/cart'}} xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill={path==='home'?'white':'black'} class="rounded-lg " viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>

       
        </div>
        
        {/* <div className='flex items-center justify-center flex-col w-[150px] h-[70px] '>
        <h4 className='font2 text-[19px] text-[#FF9F00]'>Party Essentials</h4>
        </div> */}
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
          <a href="/profile" className="block px-2 py-2 rounded hover:bg-gray-100">
            Profile
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
                  Premade Kits
                </a>
                <a href="/build-kit" className="block px-2 py-1 rounded hover:bg-gray-100">
                  Custom Kits
                </a>
                <a href="/allproducts" className="block px-2 py-1 rounded hover:bg-gray-100">
                  All Products
                </a>
              </div>
            )}
          </div>

          <a href="/orders" className="block px-2 py-2 rounded hover:bg-gray-100">
            Orders
          </a>
          <a href="/rewards" className="block px-2 py-2 rounded hover:bg-gray-100">
            Rewards
          </a>
          <a href="/trackorder" className="block px-2 py-2 rounded hover:bg-gray-100">
            Track Order
          </a>
          <a href="#" className="block px-2 py-2 rounded hover:bg-red-100 text-red-600">
            Sign Out
          </a>
        </nav>

        </div>
      
      
    </>
  )
}
