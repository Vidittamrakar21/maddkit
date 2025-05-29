import React from 'react'
import '../App.css'
import RotatingText from './RotatingText'

export default function Navbar() {
  return (
    <>
    <div className='fixed w-[100%] z-50 h-[33px] flex top-0 items-center justify-center bg-[#E11B23] text-white'>
      {/* FREE SHIPPING ON ORDERS OVER ₹1999 */}
      <RotatingText
  texts={['FREE SHIPPING ON ORDERS OVER ₹1999', 'Sale is LIVE Flat 50% OFF']}
  mainClassName="px-2 sm:px-2 md:px-3   text-white text-[1rem] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
    <nav className='w-[100%] h-[70px] z-50 bg-[white] b fixed top-[33px]  shadow-lg flex items-center justify-between'>
        <img src="logo2.png"  className='h-[60px] w-[150px] ml-8' alt="" />
        {/* <h1 className='font text-[#E11B23] text-[25px] ml-8'>MADDKIT</h1> */}



        <div className='w-[550px] h-[60px] flex items-center justify-evenly mr-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4F5B66" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>   
         <input type="text" placeholder='What are you looking for?' className='p-3 h-[45px] w-[300px] border border-[#4F5B66] rounded-md placeholder:text-[#4F5B66]' name="" id="" />   
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4F5B66" class="bi bi-balloon-heart" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#B20505" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4F5B66" class="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#4F5B66" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
        </div>
        
        {/* <div className='flex items-center justify-center flex-col w-[150px] h-[70px] '>
        <h4 className='font2 text-[19px] text-[#FF9F00]'>Party Essentials</h4>
        </div> */}
    </nav>
    </>
  )
}
