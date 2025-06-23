import React from 'react'
import { useNavigate } from 'react-router-dom'
import FadeContent from './Fadecontent';
import '../App.css';
import { useState, useEffect } from 'react';

export default function Card({ img, title, price, ogprice, off , id}) {
  const navigate = useNavigate();

  function navigateProduct() {
    window.location.href = `/product?product_id=${id}`
  }

  const [colorBox, setColorBox] = useState(false);
  const [sizeBox, setSizeBox] = useState(false);


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
      <div onClick={navigateProduct} className='border  sm:w-[350px] w-[160px] min-h-[300px] sm:min-h-[200px] select-none  m-2 bg-[white] overflow-hidden shadow-lg  flex items-start justify-center  flex-col'>
        {/* <div className='relative top-10 flex items-center justify-between '>
    <div className=' text-white bg-[#ED1C28] text-[14px] h-[30px] w-[60px] rounded-md ml-3 flex items-center justify-center'>
    <h1 className=''>{off}% off</h1>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ED1C28" className="mr-3" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
    </svg>
    </div> */}
        <div className='sm:h-[350px] sm:max-h-[350px] sm:max-w-[350px]  w-[160px] h-[160px] max-h-[160px] max-w-[160px]  sm:w-[350px]  overflow-hidden'>
          <img src={img} className='sm:h-[100%] sm:w-[100%]  h-[100%] w-[100%] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 ' alt="" />
        </div>

        <h1 className='mt-2 font-bold ml-2 text-[14px] sm:text-[18px] line-clamp-2'>{title}...</h1>
        <div className='text-white  sm:w-[70px] w-[70px] sm:h-[28px] h-[18px] ml-1 flex items-center justify-center'>
          {/* <h5 className='text-[14px]'>3.9</h5> */}
          <h3 className='text-[#CCCCCC] sm:text-[18px]  text-[15px] ml-1'>★</h3>
          <h3 className='text-[#CCCCCC] sm:text-[18px]  text-[15px] ml-1'>★</h3>
          <h3 className='text-[#CCCCCC] sm:text-[18px]  text-[15px] ml-1'>★</h3>
          <h3 className='text-[#CCCCCC] sm:text-[18px]  text-[15px] ml-1'>★</h3>
        </div>
        <div className='sm:w-[350px] p-2 sm:h-[50px] sm:flex sm:items-center sm:justify-start hidden'>
          <div onClick={(e) => { e.stopPropagation(); setColorBox(!colorBox); setSizeBox(false) }} className='w-[100px] h-[35px] border border-[#d4d4d4]  rounded-[10px] flex items-center justify-evenly'>
            <div className={`h-[25px] w-[25px]  rounded-[100%] shadow-lg flex items-center justify-center border border-[#3f3e3e]} `}>
              <div className={`h-[20px] w-[20px]  bg-[red] rounded-[100%] `}></div>
            </div>
            <h1>Red</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className=' rotate-180' viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <div onClick={(e) => { e.stopPropagation(); setColorBox(false); setSizeBox(!sizeBox) }} className='w-[120px] ml-3 h-[35px] border border-[#d4d4d4]  rounded-[10px] flex items-center justify-evenly'>

            <h1>16 Inches</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className=' rotate-180' viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>

        </div>

        {colorBox === true ?
          <div className='absolute w-[120px] ml-3 bg-[white]  border border-[#d4d4d4] rounded-[10px] z-30 flex items-center flex-col justify-center'>

            <div className='w-[100px] mt-3  h-[35px] border border-[#d4d4d4]  rounded-[10px] flex items-center justify-start'>
              <div className={`h-[25px] w-[25px]  rounded-[100%] shadow-lg flex items-center justify-center border border-[#3f3e3e]} ml-1 `}>
                <div className={`h-[20px] w-[20px]  bg-[#3dc2f7] rounded-[100%] `}></div>
              </div>
              <h1 className='ml-1'>Blue</h1>
            </div>
            <div className='w-[100px] mt-3  h-[35px] border border-[#d4d4d4]  rounded-[10px] flex items-center justify-start'>
              <div className={`h-[25px] w-[25px]  rounded-[100%] shadow-lg flex items-center justify-center border border-[#3f3e3e]} ml-1 `}>
                <div className={`h-[20px] w-[20px]  bg-[purple] rounded-[100%] `}></div>
              </div>
              <h1 className='ml-1'>Purple</h1>
            </div>
            <div className='w-[100px] mt-3  h-[35px] border border-[#d4d4d4]  rounded-[10px] flex items-center justify-start'>
              <div className={`h-[25px] w-[25px]  rounded-[100%] shadow-lg flex items-center justify-center border border-[#3f3e3e]} ml-1`}>
                <div className={`h-[20px] w-[20px]  bg-[pink] rounded-[100%] `}></div>
              </div>
              <h1 className='ml-1'>Pink</h1>
            </div>

          </div> : <></>
        }

        {sizeBox === true ?
          <div className='absolute ml-3 w-[120px] bg-[white]  border border-[#d4d4d4] rounded-[10px] z-30 flex items-center flex-col justify-center'>

            <div className='w-[100px] mt-3  h-[35px] border border-[#d4d4d4]  rounded-[10px] flex items-center justify-start'>

              <h1 className='ml-1'>32 Inches</h1>
            </div>
            <div className='w-[100px] mt-3  h-[35px] border border-[#d4d4d4]  rounded-[10px] flex items-center justify-start'>

              <h1 className='ml-1'>64 Inches</h1>
            </div>


          </div> : <></>
        }


        <div className='flex sm:items-center  sm:justify-between sm:flex-row flex-col items-center justify-center w-[100%] h-[95px] sm:h-[80px]   sm:p-2 p-0'>
          <div className='flex items-start w-[100%] sm:w-[50%] justify-start flex-col'>
            <span className='sm:text-[18] text-[12px] font-[300] ml-2'> {ogprice?`${off}% Off`:''}</span>
            <h3 className='sm:text-[22px] text-[18px] text-[black] font-[600] ml-2'><span className='line-through sm:text-[16px] text-[14px] text-[gray]'>{ogprice?`₹${ogprice}`:''}</span> &nbsp;₹{price} </h3>

          </div>
          <button className='h-[35px] sm:h-[40px] sm:w-[250px] mt-1 mb-1 sm:mb-0 sm:mt-0 w-[140px]  flex items-center justify-center  flex-row btn-grad text-black font-[600]'>
            + ADD
          </button>
        </div>
      </div>
    </FadeContent>
  )
}
