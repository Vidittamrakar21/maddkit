import React from 'react'

export default function Footer() {
  return (
    <section className='w-[110vw] text-white  mb-[-100px]  h-[90vh]  overflow-hidden  sm:h-[80vh] bg-[black] rotate-2  select-none   flex-col  flex items-center justify-start'>
    <div className='flex items-center justify-center mt-5 flex-col h-[300px] w-[90%]'>
    <div className='flex items-center justify-center flex-col -rotate-2 mt-3'>
      <h1 className='font-custom text-[white] sm:text-[2.4rem] text-[2.3rem] sm:mt-2 mt-0 '>MADDKIT</h1>
      <h6 className='sm:text-white text-white font2 sm:text-[2rem] text-[1.5rem]'>Party Essentials</h6>
      </div>

      <h1 className='font5 text-[white] sm:text-[2.4rem] text-center p-5 text-[2rem] -rotate-2 sm:mt-2 mt-0 '>Your celebration, your story—beautifully told with Maddkit.</h1>

    </div>

    <div className='flex items-start justify-evenly mt-5  -rotate-2    h-[250px] w-[90%] sm:w-[20%]'>
    <div className='flex items-start justify-start flex-col sm:w-[200px]    w-[100px] h-[280px]'>
   <b><h3>Categories</h3></b>
   <h3 className='mt-1'>Bakdrop Bliss</h3>
   <h3  className='mt-1'>Light It Up</h3>
   <h3 className='mt-1'>Message Pop</h3>
   <h3 className='mt-1'>Fun & Fillers</h3>
   <h3 className='mt-1'>Party Gear</h3>
   <h3 className='mt-1'>Game Zone</h3>
  </div>


  
  <div className='flex items-start justify-start flex-col sm:w-[200px]  w-[100px] h-[280px] '>
  
  <b><h3>Information</h3></b>
   <h3 className='mt-1'>Terms & Conditions</h3>
   <h3  className='mt-1'>Privacy Policy</h3>
   <h3 className='mt-1'>Return & Refund Policy</h3>
   <h3  className='mt-1'>Track Order</h3>
  </div>
  </div>
  
  <h5 className='-rotate-2 '>&copy; Maddkit. All Right Reserved.</h5>

</section> 

  )
}
