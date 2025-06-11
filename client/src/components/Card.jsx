import React from 'react'
import { useNavigate } from 'react-router-dom'
import FadeContent from './Fadecontent';
import '../App.css';

export default function Card({img, title, price, ogprice, off}) {
  const navigate = useNavigate();

  function navigateProduct(){
    window.location.href = '/product'
 }

  return (
    // <FadeContent blur={false} duration={1500} easing="ease-out" initialOpacity={0}>
    //   <div onClick={navigateProduct}  className='w-[300px]  select-none  m-2'> 
    // <div className='relative top-10 flex items-center justify-between '>
    // <div className=' text-white bg-[#E11B23] h-[30px] w-[70px] rounded-md ml-3 flex items-center justify-center'>
    // <h1 className=''>{off}% off</h1>
    // </div>
    // <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#E11B23" className="mr-3" viewBox="0 0 16 16">
    // <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
    // </svg>
    // </div>
    
    // <img src={img} className='h-[300px] w-[300px] rounded-t-xl ' alt="" />
    
    // <h1 className='mt-2'>{title}...</h1>
    // <div className='text-white w-[45px] h-[28px] rounded-md bg-[#119411] flex items-center justify-center'>
    //             <h5 className='text-[14px]'>3.9</h5>
    //             <h3 className='text-[white] text-[15px] ml-1'>★</h3>
    //         </div>
    // <h3 className='text-[18px] mt-2 text-[green] font-[600]'><span className='line-through text-[14px] text-[gray]'>₹{ogprice}</span> &nbsp;&nbsp;₹{price}</h3>
    // <button className='h-[40px] w-[300px] rounded-lg bg-[#E11B23] text-white mt-3'>Add to cart</button>
    // </div>
    // </FadeContent>


    <FadeContent blur={false} duration={1500} easing="ease-out" initialOpacity={0}>
      <div  className='sm:w-[350px] w-[200px]  select-none  m-2   bg-[white]'> 
    <div className='relative top-10 flex items-center justify-between '>
    <div className=' text-white bg-[#ED1C28] text-[14px] h-[30px] w-[60px] rounded-md ml-3 flex items-center justify-center'>
    <h1 className=''>{off}% off</h1>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ED1C28" className="mr-3" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
    </svg>
    </div>
    
    <img src={img} className='sm:h-[350px] sm:w-[350px] h-[200px] w-[200px]  ' alt="" />
    
    <h1 className='mt-2 font-bold'>{title}...</h1>
    <div className='text-white w-[70px] h-[28px] mt-2 flex items-center justify-center'>
                {/* <h5 className='text-[14px]'>3.9</h5> */}
                <h3 className='text-[#CCCCCC] text-[18px] ml-1'>★</h3>
                <h3 className='text-[#CCCCCC] text-[18px] ml-1'>★</h3>
                <h3 className='text-[#CCCCCC] text-[18px] ml-1'>★</h3>
                <h3 className='text-[#CCCCCC] text-[18px] ml-1'>★</h3>
            </div>
     <div className='sm:w-[350px] h-[50px] flex items-center justify-start'>
      <div className='w-[100px] h-[35px] border border-[#d4d4d4]  rounded-[10px] flex items-center justify-evenly'>
            <div  className={`h-[25px] w-[25px]  rounded-[100%] shadow-lg flex items-center justify-center border border-[#3f3e3e]} `}>
             <div className={`h-[20px] w-[20px]  bg-[red] rounded-[100%] `}></div>
             </div>
             <h1>Red</h1>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
      </div>
      <div className='w-[120px] ml-3 h-[35px] border border-[#d4d4d4]  rounded-[10px] flex items-center justify-evenly'>
            
             <h1>16 inches</h1>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
      </div>
     
    </div>       
   <div className='flex items-center justify-start mt-3'>
   <h3 className='text-[22px] text-[black] font-[600]'><span className='line-through text-[16px] text-[gray]'>₹{ogprice}</span> &nbsp;&nbsp;₹{price}</h3>
   <button className='h-[40px] w-[220px] ml-6  flex items-center justify-center  flex-row btn-grad text-black font-[600]'>
      + ADD
   </button>
   </div>
    </div>
    </FadeContent>
  )
}
