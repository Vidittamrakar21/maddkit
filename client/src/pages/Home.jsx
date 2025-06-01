import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Card from '../components/Card';
import '../App.css'
import RotatingText from '../components/RotatingText';
import ScrollVelocity from '../components/ScrollVelocity';
import Ballpit from '../components/Ballpit';
import FadeContent from '../components/Fadecontent';

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

        {/* <section className='w-[90%] h-[800px]  mt-[40px] back2 border-[4px] border-[black] rounded-xl flex items-center justify-start overflow-hidden'>
        <img src="back1.jpg" className='w-[35%] h-[95%] ml-3 rounded-xl ' alt="" />
        <div className='h-[600px] w-[23%]  flex items-center justify-evenly flex-col ml-3'>
        <img src="back2.jpg" className='h-[47%] w-[100%] rounded-xl' alt="" />
        <img src="back3.jpg" className='h-[47%] w-[100%] rounded-xl ' alt="" />
        </div>
        <div className='h-[600px] w-[35%]  flex items-center justify-center flex-col ml-8'>
        <RotatingText
  texts={['Craft Moments That',' Last a Lifetime.']}
  mainClassName="px-2 sm:px-3 md:px-4  font3 text-black text-[6rem] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
            <h1 className='font3 text-[6rem] text-center text-black'>Craft Moments That Last A Lifetime</h1>
            <button onClick={()=>{confetti({particleCount:210, spread:100})}} className='h-[50px] relative top-[50px] w-[250px] text-[2rem] rounded-md font3  border-[2px] border-[white] text-white bg-[#00B3E3]'>Build your kit now</button>
        </div>

    
        </section> */}


<section className='w-[90%] sm:h-[700px] h-[700px] select-none  border-[3px] border-[black] mt-[40px] bg-[#ffe7e7]   rounded-xl flex items-center justify-between flex-col overflow-hidden'>
        <div className='w-[100%] h-[500px] sm:h-[300px]  border-black flex items-center justify-center flex-col'>
            <h1 className='font3 sm:text-[6rem] text-[3.7rem] text-center text-black p-3'>Craft Moments That Last A Lifetime</h1>
            <h1 className='text-[black] sm:text-[1.6rem] text-[1.1rem] font-[500] mt-3 p-3'>Your celebration, your story—beautifully told with Maddkit.</h1>

            {/* <button onClick={()=>{confetti({particleCount:210, spread:100})}} className='h-[50px] relative top-[50px] w-[250px] text-[2rem] rounded-md font3  border-[2px] border-[white] text-white bg-[#00B3E3]'>Build your kit now</button> */}
        </div>

        <div className='w-[100%] sm:h-[400px]  h-[200px]  sm:overflow-hidden overflow-x-scroll overflow-y-hidden  flex sm:items-center sm:justify-evenly items-start justify-start '>
            <div className='box1 sm:h-[250px] h-[150px] m-3 border-[3px] border-[black] sm:w-[250px] min-w-[150px] shadow-lg sm:rounded-[55px] rounded-[35px] flex items-center justify-center text-white'>
              <h1 className='sm:text-[1.5rem] text-[1.3rem] font-[600]'>Birthday</h1>
            </div>
            <div className='bg-white sm:h-[250px] h-[150px] m-3 border-[3px] border-[black] sm:w-[250px] min-w-[150px] shadow-lg sm:rounded-[55px] rounded-[35px] flex items-center justify-center text-black'>
              <h1 className='sm:text-[1.5rem] text-[1.3rem]  font-[600]'>Anniversary</h1>
            </div>
            <div className='box2 sm:h-[250px] h-[150px] m-3 border-[3px] border-[black] sm:w-[250px] min-w-[150px] shadow-lg sm:rounded-[55px] rounded-[35px] flex items-center justify-center text-white'>
              <h1 className='sm:text-[1.5rem] text-[1.3rem]  font-[600]'>Baby Shower</h1>
            </div>
            <div className='bg-white sm:h-[250px] h-[150px] m-3 border-[3px] border-[black] sm:w-[250px] min-w-[150px] shadow-lg sm:rounded-[55px] rounded-[35px] flex items-center justify-center text-black'>
              <h1 className='sm:text-[1.5rem] text-[1.3rem]  font-[600]'>Bachelorette</h1>
            </div>
            <div className='box3 sm:h-[250px] h-[150px] m-3 border-[3px] border-[black] sm:w-[250px] min-w-[150px] shadow-lg sm:rounded-[55px] rounded-[35px] flex items-center justify-center text-white'>
              <h1 className='sm:text-[1.5rem] text-[1.3rem] font-[600]'>New Arrivals</h1>
            </div>
         
        </div>

    
        </section> 

        {/* <section className='w-[70%] h-[50px] flex items-center justify-center flex-col mt-[30px]'>

        <h1 className='text-[25px] text-[#E11B23] font-[600]'>Planning a Party? We’ve Got You Covered! 🎈</h1>
        <h2 className='text-[18px] text-[#E11B23] '>MaddKit ensures every event is magical, stress-free, and unforgettable.</h2>
       
        </section> */}

      

        {/* <section className='w-[70%] h-[50px] flex items-center justify-start  mt-[50px]'>

        <h1 className='text-[25px] text-[#E11B23] font-[600] '>Categories</h1>
        </section> */}

      
      {/* <section className='w-[90%] rounded-xl bg-[#ffdedf] h-[750px]   select-none   flex items-center flex-wrap justify-evenly   mt-9 '>
        <div className='w-[30%]  h-[700px] flex items-start justify-start flex-col'>
          <h1 className='text-[black] text-[2rem] font-[600] mt-[150px]'>Discover Best Party Essentials</h1>
          <h1 className='text-[black] text-[1.3rem] font-[500] mt-5'>Your celebration, your story—beautifully told with Maddkit.</h1>

          <button className='h-[45px] shadow-lg w-[130px] rounded-md bg-[black] mt-[150px]  text-white'>Explore All</button>

        </div>
        <div className='w-[50%] h-[700px]  flex items-center flex-wrap justify-center text-[white]  font-[600]  text-[1.5rem]  '>

        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img1.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute '>Backdrop Bliss</h1>
        </div>
        </FadeContent>

        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}> 
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img10.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Light It Up</h1>
        </div>
        </FadeContent>

        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img11.webp" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Message Pop</h1>
        </div>
        </FadeContent>

        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img7.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Fun & Fillers</h1>
        </div>
        </FadeContent>

        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img13.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Party Gear</h1>
        </div>
        </FadeContent>

        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
        <div className='rounded-lg w-[250px] h-[300px] z-20 m-4  bg-[white] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>
          <img src="img13.jpg" className='h-[97%] w-[97%] brightness-75 rounded-lg' alt="" />
          <h1 className='absolute'>Game Zone</h1>
        </div>
        </FadeContent>

        </div>
        
       
        </section> */}


<section className='w-[90%] rounded-xl  sm:h-[550px]   select-none   flex items-center flex-wrap justify-evenly   mt-9 '>
        <div className='flex items-start sm:justify-evenly justify-start sm:overflow-hidden overflow-x-scroll'>
        <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper'} off={39}/>
        <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding, Baby'} off={39}/>
        <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
        </div>
        <div className='box2 border-[3px] sm:mt-0 mt-[50px] border-[black] h-[430px] w-[300px] shadow-lg rounded-[45px] p-5 flex items-center justify-center text-white'>
              <h1 className='text-[3.4rem] text-wrap break-words font-[600]'>Expertly designed kits for every occasion.</h1>
            </div>

         <div className='flex items-start justify-center flex-col'>  
        <div className='box3 border-[3px] sm:mt-0 mt-[50px] border-[black] h-[200px] w-[300px] shadow-lg rounded-[45px] flex-col p-5 flex items-center justify-center text-white'>
              <h1 className='text-[1.6rem] font-[600]'>Curated Celebrations, Ready to Go.</h1>
              <button className='h-[45px] shadow-lg w-[180px] rounded-xl bg-[white] mt-[10px]  text-black font-[600]'>Explore Pre-Built Kits</button>

            </div>
        <div className=' h-[230px] w-[300px] sm:mt-0 mt-[50px] flex items-center justify-center text-white'>
              <div className='w-[80px] h-[80px] border-[3px] border-[black] shadow-lg flex items-center justify-center box1 rounded-[50%]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="font-[700]" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
              </svg>
              </div>
              <div className='w-[200px] h-[200px] ml-3 p-2'>
              <h1 className='text-[1rem] font-[400] text-black ml-2'>Planning a Party? We’ve Got You Covered!</h1>
              <h1 className='text-[1rem] font-[400] text-black ml-2'>MaddKit ensures every event is magical, stress-free, and unforgettable.</h1>
              <h1 className='text-[1.3rem] font-[600] text-black ml-2'>Build Your Kit Now !</h1>
              </div>
            </div>
            </div>     
        </section>
        

     
      

    
    <section className='w-[100%] h-[100px] overflow-hidden sm:mt-[150px] mt-[50px]'>
    <ScrollVelocity
  texts={[' Your celebration, your story—beautifully told with Maddkit. ', ' Transforming Gatherings into Unforgettable Memories. ']} 
  velocity={100} 
  className="custom-scroll-text"
/>
    </section>


    <section className='w-[85%] h-[50px] flex items-center justify-start  sm:mt-[100px] mt-[50px]'>

<h1 className='text-[25px] text-[black] font-[600] '>Explore Categories</h1>
</section>  



    <section className='w-[90%] rounded-xl  h-[320px]   select-none   flex sm:items-center items-center justify-start sm:overflow-hidden overflow-x-scroll overflow-y-hidden sm:justify-evenly   mt-[20px] '>
              
        <div className='h-[300px] shadow-lg box2 border-[3px] border-[black] w-[220px] min-w-[220px] m-3 flex items-center justify-center  flex-col rounded-[20px]'>
          <img src="img1.jpg" className='h-[150px] w-[150px] rounded-[50%]' alt="" />
          <button className='h-[35px] w-[120px] bg-[white] text-black rounded-[15px] mt-5 font-[500] shadow-lg'>Backdrop Bliss</button>
        </div>

        <div className='h-[300px]  shadow-lg box2 border-[3px] border-[black] w-[220px] min-w-[220px] m-3 flex items-center justify-center  flex-col rounded-[20px]'>
          <img src="img10.jpg" className='h-[150px] w-[150px] rounded-[50%]' alt="" />
          <button className='h-[35px] w-[120px] bg-[white] text-black rounded-[15px] mt-5 font-[500] shadow-lg'>Light It Up</button>
        </div>

        <div className='h-[300px]  shadow-lg border-[3px] border-[black] box2 w-[220px] min-w-[220px] m-3 flex items-center justify-center  flex-col rounded-[20px]'>
          <img src="img11.webp" className='h-[150px] w-[150px] rounded-[50%]' alt="" />
          <button className='h-[35px] w-[120px] bg-[white] text-black rounded-[15px] mt-5 font-[500] shadow-lg'>Message Pop</button>
        </div>

        <div className='h-[300px]  shadow-lg border-[3px] border-[black] box2 w-[220px] min-w-[220px] m-3 flex items-center justify-center  flex-col rounded-[20px]'>
          <img src="img7.jpg" className='h-[150px] w-[150px] rounded-[50%]' alt="" />
          <button className='h-[35px] w-[120px] bg-[white] text-black rounded-[15px] mt-5 font-[500] shadow-lg'>Fun & Fillers</button>
        </div>

        <div className='h-[300px]  shadow-lg border-[3px] border-[black] box2 w-[220px] min-w-[220px] m-3 flex items-center justify-center  flex-col rounded-[20px]'>
          <img src="img13.jpg" className='h-[150px] w-[150px] rounded-[50%]' alt="" />
          <button className='h-[35px] w-[120px] bg-[white] text-black rounded-[15px] mt-5 font-[500] shadow-lg'>Party Gear</button>
        </div>

        <div className='h-[300px]  shadow-lg border-[3px] border-[black] box2 w-[220px] min-w-[220px] m-3 flex items-center justify-center  flex-col rounded-[20px]'>
          <img src="img1.jpg" className='h-[150px] w-[150px] rounded-[50%]' alt="" />
          <button className='h-[35px] w-[120px] bg-[white] text-black rounded-[15px] mt-5 font-[500] shadow-lg'>Game Zone</button>
        </div>


        </section>

         <section className='w-[85%] h-[50px] flex items-center justify-start  sm:mt-[100px] mt-[50px]'>

<h1 className='text-[25px] text-[black] font-[600] '>Trending</h1>
</section>  

        <section className='sm:w-[80%] w-[90%] min-h-[500px]  flex items-start sm:justify-evenly sm:flex-wrap  justify-start sm:overflow-hidden overflow-x-scroll  sm:mt-[50px] mt-0'>

        <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper'} off={39}/>
        <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding, Baby'} off={39}/>
        <Card img={'img9.jpg'} price={999} ogprice={1899} title={'Happy Birthday Neon Sign – LED Wall Decor with Adapter & Hanging'} off={47}/>
        <Card img={'img11.webp'} price={179} ogprice={399} title={'Glitter Fishtail Happy Birthday Banner (Gold / Silver / Pink) – Party Decoration'} off={55}/>
        
        </section>
     

        <section className='w-[85%] h-[50px] flex items-center justify-start  sm:mt-[100px] mt-[50px]'>

<h1 className='text-[25px] text-[black] font-[600] '>For You</h1>
</section>  

        <section className='sm:w-[80%] w-[90%] min-h-[500px]  flex items-start sm:justify-evenly sm:flex-wrap  justify-start sm:overflow-hidden overflow-x-scroll  sm:mt-[50px] mt-0'>

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
