import React, { useEffect } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '../components/Card';
import { color } from 'framer-motion';
import axios from 'axios';

import Footer from '@/components/Footer';
import { useSearchParams } from "react-router-dom";




export default function Product() {

  const [activeIMGS, setActiveIMGS] = useState([])
  const [activeColors, setActiveColors] = useState([])
  const [activeSizes, setActiveSizes] = useState([])
  const [activeState, setActiveState] = useState('')
  const [activeSz, setActiveSz] = useState(16);
  const [active, setActive] = useState('')
  const [product, setProduct] = useState('');
  const [related, setRelated] = useState([]);

  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product_id");
  // const productId = 6752;

  const [value, setValue] = React.useState(0);
  let min = 1;
  let max = 10;
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  async function fetchProduct() {
    const data = await (await axios.get(`https://maddkit.com/wp-json/wc/v3/products/${productId}?per_page=50&consumer_key=ck_b0889e799c2d297ce09848972be70e5316b2bee7&consumer_secret=cs_68bfdeba8afd2aae06dab5816ac7088d0e6586bf`)).data;
    setProduct(data)
    console.log(data)
    setActive(data.images[0]?.src);
    setActiveIMGS(data.images);

    const relatedProducts = await (await axios.get(`https://maddkit.com/wp-json/wc/v3/products?include=${(data.related_ids).join(',')}&per_page=50&consumer_key=ck_b0889e799c2d297ce09848972be70e5316b2bee7&consumer_secret=cs_68bfdeba8afd2aae06dab5816ac7088d0e6586bf`)).data;
    setRelated(relatedProducts)


    data.attributes.forEach(att => {

      if ((att?.name).toLowerCase() === "color" || (att?.name).toLowerCase() === "colour") {
        setActiveColors(att.options)
        setActiveState(att.options[0])

      }
      else if ((att?.name).toLowerCase() === "size" || (att?.name).toLowerCase() === "sizes") {
        setActiveSizes(att.options)
        setActiveState(att.options[0])

      }
    });
  }

  useEffect(() => {
    fetchProduct();

  }, [])

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < max) {
      const newQty = quantity + 1;
      setQuantity(newQty);

    }
  };

  const decrement = () => {
    if (quantity > min) {
      const newQty = quantity - 1;
      setQuantity(newQty);

    }
  };


  if (product === '') {
    return (
      <div className=' w-[100%] mt-[85px] sm:mt-[133px] select-none flex items-center justify-center flex-col overflow-hidden'>
        <div className='w-[100%]   flex sm:flex-row flex-col items-start justify-start'>

          <div className='sm:w-[40%] w-[100%] min-h-[400px] flex items-center sm:ml-[100px] justify-center flex-col'>
            <div role="status" class="max-w-sm p-4   border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
              <div class="flex items-center justify-center sm:h-[500px] h-[300px] sm:w-[500px] w-[300px] mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
            </div>
          </div>


          <div className='sm:w-[40%]  w-[100%]  sm:min-h-[400px] min-h-[400px] flex sm:items-start items-center sm:mr-[50px] mr-0 justify-start flex-col '>

            <div role="status" class="max-w-sm p-4   border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
              <div class="flex items-center justify-center sm:h-[500px] h-[300px] sm:w-[500px] w-[300px] mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        
              </div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-48 w-24 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 "></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 sm:block hidden"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 sm:block hidden"></div>
              <div class="flex items-center mt-4">

                <div className='flex sm:items-center items-start sm:justify-center justify-start  sm:flex-row flex-col'>
                  <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                  <div class="sm:w-48 w-32 sm:h-[40px] h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 sm:ml-4"></div>
                </div>
              </div>
             
            </div>
          </div>




        </div>
      </div>

    )
  }




  return (
    <div className=' w-[100%] select-none flex items-center justify-start flex-col overflow-hidden'>
      <div className='w-[100%] mt-[85px] sm:mt-[133px] flex sm:flex-row flex-col items-start justify-start'>
        <div className='sm:w-[40%]  w-[100%]  sm:min-h-[800px] min-h-[400px] flex sm:items-end items-center sm:mr-[50px] mr-0 justify-start flex-col '>
          {/* <img src="img1.jpg" className='h-[500px] w-[500px] mt-5' alt="" /> */}
          <div className='sm:h-[500px]   sm:min-h-[500px] min-h-[300px]  sm:w-[500px] w-[300px] mt-5 '>


            <ReactImageMagnify enlargedImagePosition='beside' lensStyle={{ height: '400px', width: '400px', overflow: 'hidden' }} enlargedImageContainerStyle={{ backgroundColor: "white", zIndex: '30' }} enlargedImageContainerDimensions={{ width: '180%', height: '150%' }}  {...{
              smallImage: {
                alt: '',
                isFluidWidth: true,
                src: active,

              },
              largeImage: {
                src: active,
                width: 1000,
                height: 1000
              }
            }} />

          </div>
          <div className='h-[100px] sm:h-[100px] sm:mt-5 mt-2  sm:w-[500px] w-[300px] flex items-center justify-start overflow-hidden overflow-x-scroll     sm:[&::-webkit-scrollbar]:h-[7px]
                  sm:[&::-webkit-scrollbar-track]:rounded-full
                sm:[&::-webkit-scrollbar-track]:bg-gray-100
                  sm:[&::-webkit-scrollbar-thumb]:rounded-full
                  sm:[&::-webkit-scrollbar-thumb]:bg-gray-300
                  sm:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                  sm:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"> '>
            {activeIMGS.map((imgsrc, index) => (
              <img key={index} onClick={() => setActive(imgsrc.src)} src={imgsrc.src} className={`sm:h-[100px] m-1 sm:w-[100px] h-[70px] w-[70px] mt-2 sm:mt-5 ${active === imgsrc.src ? 'border-b-[3px] border-[#ED1C28]' : ''}`} alt="" />
            ))}


          </div>
        </div>
        <div className='sm:w-[40%] w-[100%] min-h-[800px] flex items-start justify-start flex-col'>

          <h1 className='mt-0 p-4 sm:p-0 sm:mt-5 sm:text-[2rem] text-[1.5rem] font5 font-[600]'>{product.name}</h1>
          <div className='text-white w-[70px] h-[28px] mt-2 flex items-center justify-center ml-4 sm:ml-0'>
            {/* <h5 className='text-[14px]'>3.9</h5> */}
            <h3 className='text-[black] text-[18px] ml-1'>★</h3>
            <h3 className='text-[black] text-[18px] ml-1'>★</h3>
            <h3 className='text-[black] text-[18px] ml-1'>★</h3>
            <h3 className='text-[black] text-[18px] ml-1'>★</h3>
          </div>
          <h3 className='sm:text-[2rem] text-[1.5rem] mt-2  text-[black] font-[600] ml-4 sm:ml-0'><span className='line-through sm:text-[18px] text-[16px] text-[gray]'>{product.regular_price ? `₹${product.regular_price}` : ''}</span> &nbsp;₹{product.price}</h3>
          <h3 className='sm:text-[20px] text-[17px] text-[green] font-[600] ml-4 sm:ml-0'>{product.regular_price ? `${Math.round(((Number(product.regular_price) - Number(product.price)) / Number(product.regular_price)) * 100)}% Off` : ''}</h3>
          <h2 className='text-[18px] mt-2 ml-4 sm:ml-0 ' dangerouslySetInnerHTML={{ __html: product.short_description }}></h2>
          <h3 className={`sm:text-[20px] text-[17px]   ${product.stock_status === "outofstock" ? "text-red-600" : "text-[green]"} font-[600] ml-4 sm:ml-0`}>{product.stock_status}</h3>

          {activeColors.length !== 0 ?

            <>
              <h2 className='text-[18px]  text-[balck] font-[600] cursor-pointer mt-2 ml-4 sm:ml-0'>Colors</h2>
              <div className='flex items-center justify-start h-[40px flex-wrap  w-[90%] cursor-pointer ml-4 sm:ml-0'>

                {activeColors.map((clr, index) => (
                  <div onClick={() => setActiveState(clr)} key={index} className={`min-w-[100px] p-2 mt-3 m-2  h-[35px]  ${activeState === clr ? 'border-[2px] border-[#353535]' : 'border border-[#d4d4d4]'}  rounded-[10px] flex items-center justify-start`}>
                    <h1 className='ml-1'>{clr}</h1>
                  </div>
                ))}


              </div>

            </> : <></>

          }


          {activeSizes.length !== 0 ?
            <>
              <h2 className='text-[18px]  text-[balck] font-[600] cursor-pointer mt-2 ml-4 sm:ml-0'>Size</h2>
              <div className='flex items-center justify-start h-[40px]  w-[90%] cursor-pointer ml-4 sm:ml-0'>

                {activeSizes.map((sz, index) => (
                  <div onClick={() => setActiveSz(sz)} key={index} className={`w-[100px] mt-3 m-2  h-[35px]  ${activeSz === sz ? 'border-[2px] border-[#353535]' : 'border border-[#d4d4d4]'}  rounded-[10px] flex items-center justify-start`}>
                    <h1 className='ml-1'>{sz} Inches</h1>
                  </div>
                ))}


              </div>
            </> : <></>

          }

          <div className='mt-5 flex items-center justify-center sm:justify-start  w-[95%] h-[30px]'>
            <div className="flex items-center space-x-3  ">
              <button
                onClick={decrement}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded text-lg font-semibold"
              >
                −
              </button>
              <span className="min-w-[30px] text-center text-lg">{quantity}</span>
              <button
                onClick={increment}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded text-lg font-semibold"
              >
                +
              </button>
            </div>
          </div>

          <div className='w-[100%] h-[45px] mt-3 flex sm:justify-start items-center justify-center'>
            <button className='h-[50px] sm:h-[50px]   w-[320px] sm:w-[400px] bg-[#ED1C28] hover:bg-[#194A33]  text-white mt-[30px]  rounded-[50px] text-[15px] font-[600] shadow-md'>ADD TO CART</button>
          </div>

          {/* <div className='flex items-center justify-center mt-9 cursor-pointer  ml-4 sm:ml-0'>
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4F5B66" class="bi bi-balloon-heart" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
        </svg>
        <h1 className='ml-2'>Add To Favourite</h1>
    </div> */}

          <div className='sm:w-[100%] w-[100%] min-h-[400px] bg-[#ffdedf81] mt-[60px] flex items-center justify-start flex-col'>
            {/* <div className='flex items-center justify-evenly h-[30px] w-[500px] mt-5'>
                <h1 className='text-[19px] font-[600] '>Description</h1>
                <h1 className='text-[19px] font-[600] '>Additional Information</h1>
            </div> */}

            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} centered textColor='secondary' indicatorColor='secondary' aria-label="basic tabs example">
                  <Tab label="Description" />
                  <Tab label="Additional Info" />
                  {/* <Tab label="Reviews" /> */}

                </Tabs>
              </Box>
            </Box>

            {value === 0 ? <div className='p-5' dangerouslySetInnerHTML={{ __html: product.description }}>

            </div> : <div></div>}

          </div>

        </div>

      </div>




      <div className='w-[100%] min-h-[500px]  flex items-center justify-start flex-col'>
        <section className='w-[85%] h-[50px] flex items-center justify-start  sm:mt-[100px] mt-[50px]'>

          <h1 className='text-[25px] text-[black] font-[600] font5'>Related Products</h1>
        </section>

        <section className='sm:w-[80%] w-[96%]  bg-[white]  select-none mt-[0px] sm:mt-[50px]    grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-6 '>



          {related.length !== 0 ? related.map((item, index) => (

            <Card key={index} img={item.images[0]?.src} price={item.price} ogprice={item.regular_price} title={item.name} off={Math.round(((Number(item.regular_price) - Number(item.price)) / Number(item.regular_price)) * 100)} id={item.id} variations={item.variations} />

          )) :

            <>

              <div role="status" class="max-w-sm p-4  border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-48 w-24 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 "></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 sm:block hidden"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 sm:block hidden"></div>
                <div class="flex items-center mt-4">
                  {/* <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg> */}
                  <div className='flex sm:items-center items-start sm:justify-center justify-start  sm:flex-row flex-col'>
                    <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                    <div class="sm:w-48 w-32 sm:h-[40px] h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 sm:ml-4"></div>
                  </div>
                </div>
                {/* <span class="sr-only">Loading...</span> */}
              </div>


              <div role="status" class="max-w-sm p-4  border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-48 w-24 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 "></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 sm:block hidden"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 sm:block hidden"></div>
                <div class="flex items-center mt-4">
                  {/* <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg> */}
                  <div className='flex sm:items-center items-start sm:justify-center justify-start  sm:flex-row flex-col'>
                    <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                    <div class="sm:w-48 w-32 sm:h-[40px] h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 sm:ml-4"></div>
                  </div>
                </div>
                {/* <span class="sr-only">Loading...</span> */}
              </div>



              <div role="status" class="max-w-sm p-4  border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-48 w-24 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 "></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 sm:block hidden"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 sm:block hidden"></div>
                <div class="flex items-center mt-4">
                  {/* <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg> */}
                  <div className='flex sm:items-center items-start sm:justify-center justify-start  sm:flex-row flex-col'>
                    <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                    <div class="sm:w-48 w-32 sm:h-[40px] h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 sm:ml-4"></div>
                  </div>
                </div>
                {/* <span class="sr-only">Loading...</span> */}
              </div>




              <div role="status" class="max-w-sm p-4  border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-48 w-24 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 "></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 sm:block hidden"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 sm:block hidden"></div>
                <div class="flex items-center mt-4">
                  {/* <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg> */}
                  <div className='flex sm:items-center items-start sm:justify-center justify-start  sm:flex-row flex-col'>
                    <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                    <div class="sm:w-48 w-32 sm:h-[40px] h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 sm:ml-4"></div>
                  </div>
                </div>
                {/* <span class="sr-only">Loading...</span> */}
              </div>




            </>

          }


        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}
