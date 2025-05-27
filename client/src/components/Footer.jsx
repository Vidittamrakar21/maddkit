import React from 'react'

export default function Footer() {
  return (
   <footer className='h-[350px] w-[100%] bg-[#E11B23] text-white flex items-center justify-start'>
   <div className='flex items-start justify-evenly flex-col w-[400px] h-[280px] ml-9'>
   <img src="logo2.png" className='h-[90px] w-[190px]' alt="" />
    <p>we’re your personal celebration partner. By creating a *personalized event calendar* for you, we help you stay ahead of your celebrations. From reminding you of important dates to suggesting the perfect props and decorations, MaddKit ensures every event is magical, stress-free, and unforgettable.</p>
    <h5 className='text-[13px]'>&copy;MADDKIT 2025 | All Rights Reserved.</h5>
   </div>

   <div className='flex items-start justify-evenly flex-col w-[200px] h-[280px] ml-9'>
   
    <b><h3>Categories</h3></b>
    <h3>Bakdrop Bliss</h3>
    <h3>Light It Up</h3>
    <h3>Message Pop</h3>
    <h3>Fun & Fillers</h3>
    <h3>Party Gear</h3>
    <h3>Game Zone</h3>
   </div>

   <div className='flex items-start justify-evenly flex-col w-[200px] h-[280px] ml-9'>
   
    <h3>Terms & Conditions</h3>
    <h3>Privacy Policy</h3>
    <h3>Return & Refund Policy</h3>
    <h3>Track Order</h3>
   </div>
   



   </footer>
  )
}
