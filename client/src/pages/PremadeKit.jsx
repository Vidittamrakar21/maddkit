import React from 'react'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default function PremadeKit() {
  return (
    <div className='min-h-[100vh] sm:mt-[103px] mt-[80px] w-[100%] flex items-center justify-start flex-col overflow-hidden'>

    <button onClick={() => { window.location.href = '/build-kit'}} className='fixed bottom-3 right-4 h-[35px] flex items-center justify-center w-[125px] text-white rounded-[15px] text-[14px] z-50 bg-[#ED1C28]'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className='mr-2' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>    
      Customize it!
    </button>
<section className='w-[85%] h-[50px] flex items-center justify-start  sm:mt-[80px] mt-[20px]'>

<h1 className='text-[25px] text-[black] font-[600] font5'>Premade Kits</h1>
</section>  

    <section className='sm:w-[80%] w-[96%]  bg-[white]  select-none mt-[0px] sm:mt-[50px]    grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-6  '>

   
    {/* <Card img={'https://maddkit.com/wp-content/uploads/2025/05/51UT22wIPHL.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner'} off={39}/> */}
    
    
    
    </section>
    <h1 className='text-[19px] mt-5 '>Launching Soon!</h1>


    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Footer/>
</div>
  )
}
