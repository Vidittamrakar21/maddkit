import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Card from '../components/Card';
import '../App.css'
import RotatingText from '../components/RotatingText';
import ScrollVelocity from '../components/ScrollVelocity';
import Ballpit from '../components/Ballpit';

export default function Home() {

    const [party, onparty] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            confetti({particleCount:210, spread:100})
        },1500)
    },[])

  return (
    <div className='mt-[103px] w-[100%] flex items-center justify-start flex-col'>

{/* <div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
  <Ballpit
    count={100}
    gravity={0.7}
    friction={0.8}
    wallBounce={0.95}
    followCursor={true}
  />
</div> */}

        <section className='w-[70%] h-[600px]  mt-[40px] bg-[#E11B23] rounded-xl flex items-center justify-start overflow-hidden'>
        <img src="back1.jpg" className='w-[35%] h-[95%] ml-3 rounded-xl ' alt="" />
        <div className='h-[600px] w-[23%]  flex items-center justify-evenly flex-col ml-3'>
        <img src="back2.jpg" className='h-[47%] w-[100%] rounded-xl' alt="" />
        <img src="back3.jpg" className='h-[47%] w-[100%] rounded-xl ' alt="" />
        </div>
        <div className='h-[600px] w-[35%]  flex items-center justify-center flex-col ml-8'>
        <RotatingText
  texts={['Craft Moments',' That Last ','a Lifetime.']}
  mainClassName="px-2 sm:px-2 md:px-3  font text-white text-[3rem] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
            <button onClick={()=>{confetti({particleCount:210, spread:100})}} className='h-[40px] relative top-[50px] w-[150px] rounded-xl border-none text-black bg-white'>Build your kit now</button>
        </div>

    
        </section>

        <section className='w-[70%] h-[50px] flex items-center justify-center flex-col mt-[30px]'>

        <h1 className='text-[25px] text-[#E11B23] font-[600]'>Planning a Party? We’ve Got You Covered! 🎈</h1>
        <h2 className='text-[18px] text-[#E11B23] '>MaddKit ensures every event is magical, stress-free, and unforgettable.</h2>
       
        </section>

      

        {/* <section className='w-[70%] h-[50px] flex items-center justify-start  mt-[50px]'>

        <h1 className='text-[25px] text-[#E11B23] font-[600] '>Categories</h1>
        </section> */}

      
      <section className='w-[90%] rounded-xl bg-[#ffdedf] h-[750px]   select-none   flex items-center flex-wrap justify-evenly   mt-9 '>
        <div className='w-[30%]  h-[700px] flex items-start justify-start flex-col'>
          <h1 className='text-[black] text-[2rem] font-[600] mt-[150px]'>Discover Best Party Essentials</h1>
          <h1 className='text-[black] text-[1.3rem] font-[500] mt-5'>Your celebration, your story—beautifully told with Maddkit.</h1>

          <button className='h-[45px] shadow-lg w-[130px] rounded-md bg-[black] mt-[150px]  text-white'>Explore All</button>

        </div>
        <div className='w-[50%] h-[700px]  flex items-center flex-wrap justify-center text-[white]  font-[600]  text-[1.5rem]  '>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img1.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute '>Backdrop Bliss</h1>
        </div>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img10.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Light It Up</h1>
        </div>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img11.webp" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Message Pop</h1>
        </div>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img7.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Fun & Fillers</h1>
        </div>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img13.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Party Gear</h1>
        </div>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img13.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Game Zone</h1>
        </div>

        </div>
        
       
        </section>
        
      

    
    <section className='w-[100%] h-[100px] overflow-hidden mt-[150px]'>
    <ScrollVelocity
  texts={[' Your celebration, your story—beautifully told with Maddkit. ', ' Transforming Gatherings into Unforgettable Memories. ']} 
  velocity={100} 
  className="custom-scroll-text"
/>
    </section>



    <section className='w-[90%] rounded-xl bg-[#ffdedf] h-[750px]   select-none   flex items-center flex-wrap justify-evenly   mt-[100px] '>
        <div className='w-[30%]  h-[700px] flex items-start justify-start flex-col'>
          <h1 className='text-[black] text-[2rem] font-[600] mt-[150px]'>Curated Celebrations, Ready to Go.</h1>
          <h1 className='text-[black] text-[1.3rem] font-[500] mt-5'>Expertly designed kits for every occasion.</h1>

          <button className='h-[45px] shadow-lg w-[130px] rounded-md bg-[black] mt-[150px]  text-white'>Explore All</button>

        </div>
        <div className='w-[50%] h-[700px]  flex items-center flex-wrap justify-center text-[white]  font-[600]  text-[1.5rem]  '>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img1.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute '>Backdrop Bliss</h1>
        </div>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img10.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Light It Up</h1>
        </div>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img11.webp" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Message Pop</h1>
        </div>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img7.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Fun & Fillers</h1>
        </div>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img13.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Party Gear</h1>
        </div>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img13.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Game Zone</h1>
        </div>

        </div>
        
       
        </section>
     

        <section className='w-[70%] h-[50px] flex items-center justify-start  mt-[160px]'>

        <h1 className='text-[25px] text-[#E11B23] font-[600] '>For you</h1>
        </section>

        <section className='w-[70%]   min-h-[500px] flex items-start justify-evenly flex-wrap   mt-[50px]'>

        <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper'} off={39}/>
        <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding, Baby'} off={39}/>
        <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
        <Card img={'img9.jpg'} price={999} ogprice={1899} title={'Happy Birthday Neon Sign – LED Wall Decor with Adapter & Hanging'} off={47}/>
        <Card img={'img10.jpg'} price={999} ogprice={1899} title={'Better Together Neon Sign – Gold Color LED Wall Decor for Weddings & Events'} off={47}/>
        <Card img={'img11.webp'} price={179} ogprice={399} title={'Glitter Fishtail Happy Birthday Banner (Gold / Silver / Pink) – Party Decoration'} off={55}/>
        <Card img={'img12.jpg'} price={149} ogprice={399} title={'Bride to Be Banner – Bachelorette Party Decoration with Purple Heart and Ring'} off={63}/>
        <Card img={'img13.jpg'} price={499} ogprice={599} title={'Glow in the Dark Neon Bands – 100 Pcs Glow Stick Set with Connectors'} off={17}/>
        
        </section>
        <br />
        <br />
        <br />


    </div>
  )
}
