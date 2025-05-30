import React from 'react'
import { useNavigate } from 'react-router-dom'
import FadeContent from './Fadecontent';

export default function Card({img, title, price, ogprice, off}) {
  const navigate = useNavigate();

  function navigateProduct(){
    window.location.href = '/product'
 }

  return (
    <FadeContent blur={false} duration={1500} easing="ease-out" initialOpacity={0}>
      <div onClick={navigateProduct}  className='w-[300px]  select-none  m-2'> 
    <div className='relative top-10 flex items-center justify-between '>
    <div className=' text-white bg-[#E11B23] h-[30px] w-[70px] rounded-md ml-3 flex items-center justify-center'>
    <h1 className=''>{off}% off</h1>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#E11B23" className="mr-3" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
    </svg>
    </div>
    
    <img src={img} className='h-[300px] w-[300px] rounded-t-xl ' alt="" />
    
    <h1 className='mt-2'>{title}...</h1>
    <div className='text-white w-[45px] h-[28px] rounded-md bg-[#119411] flex items-center justify-center'>
                <h5 className='text-[14px]'>3.9</h5>
                <h3 className='text-[white] text-[15px] ml-1'>★</h3>
            </div>
    <h3 className='text-[18px] mt-2 text-[green] font-[600]'><span className='line-through text-[14px] text-[gray]'>₹{ogprice}</span> &nbsp;&nbsp;₹{price}</h3>
    <button className='h-[40px] w-[300px] rounded-lg bg-[#E11B23] text-white mt-3'>Add to cart</button>
    </div>
    </FadeContent>
  )
}
