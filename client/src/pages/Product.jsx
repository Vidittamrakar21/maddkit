import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '../components/Card';




  

export default function Product() {

    const [activeIMGS, setActiveIMGS] = useState(['img1.jpg','img7.jpg'])
    const [activeColors, setActiveColors] = useState(['red','yellow','cyan'])
    const [activeState, setActiveState] = useState(activeColors[0])
    const [active, setActive] = useState('img1.jpg')

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue);
    };

    
  

  return (
    <div className=' w-[100%] select-none flex items-center justify-start flex-col '>
        <div className='w-[100%] mt-[103px] flex items-start justify-start'>
            <div className='w-[40%]  min-h-[800px] flex items-end mr-[50px] justify-start flex-col '>
                {/* <img src="img1.jpg" className='h-[500px] w-[500px] mt-5' alt="" /> */}
                <div className='h-[500px] w-[500px] mt-5 '>

                
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
                <div className='h-[100px] w-[500px] flex items-center justify-start'>
                    {activeIMGS.map((imgsrc, index)=>(
                        <img key={index} onClick={()=>setActive(imgsrc)} src={imgsrc}  className={`h-[100px] w-[100px] mt-5 ${active === imgsrc?'border border-[black]':''}`} alt="" />
                    ))}   


                </div>
            </div>
            <div className='w-[40%] min-h-[800px]  flex items-start justify-start flex-col'>

            <h1 className='mt-5 text-[2rem]  font-[600]'>Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper Flower Fans</h1>
            <div className='text-white w-[60px] h-[28px] rounded-md bg-[#119411] flex items-center justify-center'>
                <h3>3.9</h3>
                <h3 className='text-[white] text-[18px] ml-2'>★</h3>
            </div>
    <h3 className='text-[2rem] mt-2  text-[black] font-[600] '><span className='line-through text-[18px] text-[gray]'>₹399</span> &nbsp;₹255 </h3>
    <h3 className='text-[20px]  text-[green] font-[600] '>39% Off</h3>
    <h2 className='text-[18px] mt-2'>Brighten up your celebration with this 6-piece Rainbow Party Decoration Set featuring a birthday banner and colorful paper fans – perfect for first birthdays, kids’ parties, and festive occasions!</h2>
    <h3 className='text-[20px]  text-[green] font-[600] '>In Stock</h3>

    <h2 className='text-[18px]  text-[balck] font-[600] cursor-pointer mt-2 '>Colors</h2>
    <div className='flex items-center justify-evenly h-[40px]  w-[120px] cursor-pointer'>
        
        {activeColors.map((color, index)=>(
             <div onClick={()=>setActiveState(color)} key={index} className={`h-[35px] w-[35px]  rounded-[100%] shadow-lg flex items-center justify-center ${activeState === color?'border border-[#3f3e3e]':''} `}>
             <div className={`h-[30px] w-[30px]  bg-[${color}] rounded-[100%] `}></div>
             </div>
        ))}
       
       
    </div>

    <button className='h-[40px] w-[300px] rounded-lg bg-[#E11B23] text-white mt-[30px] shadow-md'>Add to cart</button>

    <div className='flex items-center justify-center mt-5 cursor-pointer'>
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4F5B66" class="bi bi-balloon-heart" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
        </svg>
        <h1 className='ml-2'>Add To Favourite</h1>
    </div>

    <div className='w-[100%] min-h-[400px] bg-[#ffdedf81] mt-[60px] flex items-center justify-start flex-col'>
            {/* <div className='flex items-center justify-evenly h-[30px] w-[500px] mt-5'>
                <h1 className='text-[19px] font-[600] '>Description</h1>
                <h1 className='text-[19px] font-[600] '>Additional Information</h1>
            </div> */}

<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered textColor='secondary' indicatorColor='secondary' aria-label="basic tabs example">
          <Tab label="Description" />
          <Tab label="Additional Information" />
          <Tab label="Reviews" />
         
        </Tabs>
      </Box>
    </Box>

    {value===0? <div className='p-5'>
        <h1 className='text-[22px] font-[600]'>Glitter Fishtail Happy Birthday Banner | Premium Cardboard Party Decoration 🎉✨</h1>
        <p className='mt-5 '>Add elegance and sparkle to any celebration with this Glittery Fishtail Banner. With 13 glitter-coated cardboard flags and included ribbon, it’s the perfect party backdrop for birthdays of all ages.
<br />
Perfect For:

Birthday parties for boys, girls, teens, or adults

Glam, pastel, or sparkle-themed parties

Baby showers, milestone birthdays, or home celebrations

Indoor & outdoor decoration
<br />
Product Details:
<br />
Design: Fishtail cut glitter cardboard letters
<br />
Pack Includes: 13 Letter Flags (HAPPY BIRTHDAY) + Hanging Ribbon
<br />
Material: Thick Glitter Cardboard
<br />
Sizes: Each flag approx. 7 x 5 inches
<br />
Colors Available: Gold, Silver, Baby Pink
<br />
Reusable: Strong and long-lasting – reuse for multiple events

Glittery cardboard Happy Birthday banner in 3 elegant color variants

Includes 13 individual flags and ribbon for hanging

Fishtail design adds modern touch to party décor

Pre-punched holes for easy and quick setup

Great for kids’ birthdays, adult parties, baby showers, and themed events

Lightweight, durable, and reusable banner for multiple celebrations</p>
    </div>:<div></div>}

        </div>

            </div>

        </div>




        <div className='w-[100%] min-h-[500px]  flex items-center justify-start flex-col'>
        <section className='w-[70%] h-[50px] flex items-center justify-start  mt-[60px]'>

        <h1 className='text-[25px] text-[#E11B23] font-[600] '>Related Products</h1>
        </section>

        <section className='w-[70%]   min-h-[500px] flex items-start justify-evenly flex-wrap   mt-[20px]'>

        <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper'} off={39}/>
        <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding, Baby'} off={39}/>
        <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
        <Card img={'img9.jpg'} price={999} ogprice={1899} title={'Happy Birthday Neon Sign – LED Wall Decor with Adapter & Hanging'} off={47}/>
       
        </section>
        </div>
        <br />
        <br />
        <br />

    </div>
  )
}
