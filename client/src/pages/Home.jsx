import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Card from '../components/Card';

export default function Home() {

    const [party, onparty] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            confetti({particleCount:210, spread:100})
        },1500)
    },[])

  return (
    <div className='mt-[103px] w-[100%] flex items-center justify-start flex-col'>
        <section className='w-[70%] h-[600px]  mt-[40px] bg-[#E11B23] rounded-xl flex items-center justify-start overflow-hidden'>
        <img src="back1.jpg" className='w-[35%] h-[95%] ml-3 rounded-xl ' alt="" />
        <div className='h-[600px] w-[23%]  flex items-center justify-center flex-col ml-3'>
        <img src="back2.jpg" className='h-[65%] w-[100%] rounded-xl mb-5' alt="" />
        <img src="back3.jpg" className='h-[100%] w-[100%] rounded-xl ' alt="" />
        </div>
        <div className='h-[600px] w-[35%]  flex items-center justify-center flex-col ml-8'>
            <h1 className='text-[white] text-[3rem] font'>Buy in 6 steps <br />
            BUILD in 4 & VIBE Forever</h1>
            <button onClick={()=>{confetti({particleCount:210, spread:100})}} className='h-[40px] mt-5 w-[150px] rounded-xl border-none text-black bg-white'>Build your kit now</button>
        </div>

    
        </section>

        <section className='w-[70%] h-[50px] flex items-center justify-center flex-col mt-[30px]'>

        <h1 className='text-[25px] text-[#E11B23] font-[600]'>Planning a Party? We’ve Got You Covered! 🎈</h1>
        <h2 className='text-[18px] text-[#E11B23] '>MaddKit ensures every event is magical, stress-free, and unforgettable.</h2>
       
        </section>

        <section className='w-[70%] h-[50px] flex items-center justify-start  mt-[50px]'>

        <h1 className='text-[25px] text-[#E11B23] font-[600] '>Categories</h1>
        </section>

        <section className='w-[70%] h-[220px]  flex items-center justify-center text-[white]  font-[600]  text-[2rem] mt-3 '>
        <div className='rounded-lg w-[20%] h-[100%] m-4 bg-[#E52020] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>Bakdrop Bliss</div>
        <div className='rounded-lg w-[20%] h-[100%] m-4 bg-[#F1B643] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>Light It Up</div>
        <div className='rounded-lg w-[20%] h-[100%] m-4 bg-[#65BFB7] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>Message Pop</div>
        <div className='rounded-lg w-[20%] h-[100%] m-4 bg-[#DA79AC] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>Fun & Fillers</div>
        <div className='rounded-lg w-[20%] h-[100%] m-4 bg-[#FF0000] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>Party Gear</div>
        <div className='rounded-lg w-[20%] h-[100%] m-4 bg-[#ECB740] shadow-lg p-3 flex items-center justify-center hover:scale-105 hover:ease-in-out hover:transition-all'>Game Zone</div>
       
        </section>

        <section className='w-[70%] h-[50px] flex items-center justify-start  mt-[50px]'>

        <h1 className='text-[25px] text-[#E11B23] font-[600] '>For you</h1>
        </section>

        <section className='w-[70%]  min-h-[500px] flex items-start justify-start flex-wrap   mt-[50px]'>

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
