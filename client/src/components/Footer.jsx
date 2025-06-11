import React from 'react'

export default function Footer() {
  return (
   <footer className='h-[450px] w-[100%] rotate-2 bg-[#A7B8E2] text-black border-t-[3px] border-t-black flex items-center justify-start'>
   <div className='flex items-start justify-start flex-col sm:w-[200px] w-[100px] h-[280px] sm:ml-9 ml-3'>
   <img src="logo2.png" className='sm:h-[90px] h-[40px] sm:w-[190px]  w-[80px]' alt="" />
    {/* <p>we’re your personal celebration partner. By creating a *personalized event calendar* for you, we help you stay ahead of your celebrations. From reminding you of important dates to suggesting the perfect props and decorations, MaddKit ensures every event is magical, stress-free, and unforgettable.</p> */}
    <h5 className='text-[13px] mt-1'>&copy;MADDKIT 2025 | All Rights Reserved.</h5>
   </div>

   <div className='flex items-start justify-start flex-col sm:w-[200px] w-[100px] h-[280px] ml-9'>
   
    <b><h3>Categories</h3></b>
    <h3 className='mt-1'>Bakdrop Bliss</h3>
    <h3  className='mt-1'>Light It Up</h3>
    <h3 className='mt-1'>Message Pop</h3>
    <h3 className='mt-1'>Fun & Fillers</h3>
    <h3 className='mt-1'>Party Gear</h3>
    <h3 className='mt-1'>Game Zone</h3>
   </div>

   <div className='flex items-start justify-start flex-col sm:w-[200px] w-[100px] h-[280px] ml-9'>
   
    <h3 className='mt-1'>Terms & Conditions</h3>
    <h3  className='mt-1'>Privacy Policy</h3>
    <h3 className='mt-1'>Return & Refund Policy</h3>
    <h3  className='mt-1'>Track Order</h3>
   </div>
   



   </footer>
  )
}
