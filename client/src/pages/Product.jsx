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
    const [activeState, setActiveState] = useState('black')
    const [activeSz, setActiveSz] = useState(16);
    const [active, setActive] = useState('')
    const [product, setProduct] = useState({});

    const [searchParams] = useSearchParams();
    const productId = searchParams.get("product_id");

    const [value, setValue] = React.useState(0);
    let min = 1;
    let max = 10;
    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue);
    };

    async function fetchProduct(){
      const data = await (await axios.get(`https://maddkit.com/wp-json/wc/v3/products/${productId}?per_page=50&consumer_key=ck_b0889e799c2d297ce09848972be70e5316b2bee7&consumer_secret=cs_68bfdeba8afd2aae06dab5816ac7088d0e6586bf`)).data;
      setProduct(data)
      setActive(data.images[0]?.src)
      setActiveIMGS(data.images)
    }

    useEffect(()=>{
        fetchProduct();
        const clrs = [{color: 'black'},{color:'#E11B23'},{color:'#119411'}];
        setActiveColors(clrs)
        const sz = [16,32,74];
        setActiveSizes(sz);
    },[])

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
    
  

  return (
    <div className=' w-[100%] select-none flex items-center justify-start flex-col overflow-hidden'>
        <div className='w-[100%] mt-[85px] sm:mt-[133px] flex sm:flex-row flex-col items-start justify-start'>
            <div className='sm:w-[40%]  w-[100%]  sm:min-h-[800px] min-h-[400px] flex sm:items-end items-center sm:mr-[50px] mr-0 justify-start flex-col '>
                {/* <img src="img1.jpg" className='h-[500px] w-[500px] mt-5' alt="" /> */}
                <div className='sm:h-[500px] h-[300px] sm:w-[500px] w-[300px] mt-5 '>

                
                <ReactImageMagnify enlargedImagePosition='beside' lensStyle={{height:'400px', width:'400px', overflow:'hidden'}} enlargedImageContainerStyle={{backgroundColor:"white",  zIndex: '30'}}  enlargedImageContainerDimensions={{width: '180%', height: '150%'}}  {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
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
                <div className='h-[100px] sm:h-[100px] sm:mt-5 mt-2  sm:w-[500px] w-[300px] flex items-center justify-start overflow-hidden overflow-x-scroll'>
                    {activeIMGS.map((imgsrc, index)=>(
                        <img key={index} onClick={()=>setActive(imgsrc.src)} src={imgsrc.src}  className={`sm:h-[100px] m-1 sm:w-[100px] h-[70px] w-[70px] mt-2 sm:mt-5 ${active === imgsrc?'border-b-[3px] border-[#ED1C28]':''}`} alt="" />
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
    <h3 className='sm:text-[2rem] text-[1.5rem] mt-2  text-[black] font-[600] ml-4 sm:ml-0'><span className='line-through sm:text-[18px] text-[16px] text-[gray]'>{product.regular_price?`₹${product.regular_price}`:''}</span> &nbsp;₹{product.price}</h3>
    <h3 className='sm:text-[20px] text-[17px] text-[green] font-[600] ml-4 sm:ml-0'>{product.regular_price?`${Math.round(((Number(product.regular_price) - Number(product.price) )/Number(product.regular_price)) * 100 )}% Off`:''}</h3>
    <h2 className='text-[18px] mt-2 ml-4 sm:ml-0 '  dangerouslySetInnerHTML={{ __html: product.short_description }}></h2>
    <h3 className='sm:text-[20px] text-[17px]  text-[green] font-[600] ml-4 sm:ml-0'>{product.stock_status}</h3>

    <h2 className='text-[18px]  text-[balck] font-[600] cursor-pointer mt-2 ml-4 sm:ml-0'>Colors</h2>
    <div className='flex items-center justify-evenly h-[40px]  w-[120px] cursor-pointer ml-4 sm:ml-0'>
        
        {activeColors.map((clr, index)=>(
             <div onClick={()=>setActiveState(clr.color)} key={index} className={`h-[28px] w-[28px]  sm:h-[35px] sm:w-[35px]  rounded-[100%] shadow-lg flex items-center justify-center ${activeState === clr.color?'border border-[#3f3e3e]':''} `}>
             <div className={`h-[23px] w-[23px] sm:h-[30px] sm:w-[30px]  bg-[${clr.color}] rounded-[100%] `}></div>
             </div>
        ))}
       
       
    </div>
    <h2 className='text-[18px]  text-[balck] font-[600] cursor-pointer mt-2 ml-4 sm:ml-0'>Size</h2>
    <div className='flex items-center justify-start h-[40px]  w-[90%] cursor-pointer ml-4 sm:ml-0'>
        
        {activeSizes.map((sz, index)=>(
            <div onClick={()=>setActiveSz(sz)} key={index} className={`w-[100px] mt-3 m-2  h-[35px]  ${activeSz === sz? 'border-[2px] border-[#353535]':'border border-[#d4d4d4]'}  rounded-[10px] flex items-center justify-start`}>
            <h1 className='ml-1'>{sz} Inches</h1>
            </div>  
        ))}
       
       
    </div>

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
        <Tabs value={value} onChange={handleChange} centered textColor='secondary'  indicatorColor='secondary' aria-label="basic tabs example">
          <Tab label="Description" />
          <Tab label="Additional Info" />
          {/* <Tab label="Reviews" /> */}
         
        </Tabs>
      </Box>
    </Box>

    {value===0? <div className='p-5' dangerouslySetInnerHTML={{ __html: product.description }}>
       
    </div>:<div></div>}

        </div>

            </div>

        </div>




        <div className='w-[100%] min-h-[500px]  flex items-center justify-start flex-col'>
        <section className='w-[85%] h-[50px] flex items-center justify-start  sm:mt-[100px] mt-[50px]'>

<h1 className='text-[25px] text-[black] font-[600] font5'>Related Products</h1>
</section>  

        <section className='sm:w-[80%] w-[90%] min-h-[500px]  flex items-start sm:justify-evenly sm:flex-wrap  justify-start sm:overflow-hidden overflow-x-scroll  sm:mt-[50px] mt-0'>

        <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner &'} off={39}/>
        <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding'} off={39}/>
        <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
        <Card img={'img9.jpg'} price={999} ogprice={1899} title={'Happy Birthday Neon Sign – LED Wall Decor with Adapter & Hanging'} off={47}/>
        <Card img={'img10.jpg'} price={999} ogprice={1899} title={'Better Together Neon Sign – Gold Color LED Wall Decor for Weddings & Events'} off={47}/>
        <Card img={'img11.webp'} price={179} ogprice={399} title={'Glitter Fishtail Happy Birthday Banner (Gold / Silver / Pink) – Party Decoration'} off={55}/>
        <Card img={'img12.jpg'} price={149} ogprice={399} title={'Bride to Be Banner – Bachelorette Party Decoration with Purple Heart and Ring'} off={63}/>
        <Card img={'img13.jpg'} price={499} ogprice={599} title={'Glow in the Dark Neon Bands – 100 Pcs Glow Stick Set with Connectors'} off={17}/>
        
        </section>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer/>
    </div>
  )
}
