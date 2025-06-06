import React from 'react'
import Stepper,{Step} from '@/components/Stepper'
import Card from '@/components/Card';
import { useState } from 'react';

export default function BuildKit() {
    const [kitStep, setStep] = useState(1);
    const category = ['Backdrop Bliss', 'Light It Up', 'Message Pop', 'Fun & Fillers', 'Party Gear', 'Game Zone']
    
  return (
    <div className='min-h-[100vh] w-[100%] flex items-center justify-start flex-col'>
        <Stepper
  initialStep={1}
  onStepChange={(step) => {
    setStep(step);
  }}
  onFinalStepCompleted={() => console.log("All steps completed!")}
  backButtonText="Previous"
  nextButtonText="Next"
  stepCircleContainerClassName=''
>
  <Step>
    <h2>Let's Build Your Kit In Just 6 Steps!</h2>
    <h1 className='font-[600] mt-3 sm:text-[19px] text-[17px]'>1. Backdrop Bliss</h1>
    <p>"Set the stage for your story."</p>
  </Step>
  <Step>
  
  <h1 className='font-[600] mt-3 sm:text-[19px] text-[17px]'>2. Light It Up</h1>
  <p>"Illuminate the moments that matter."</p>
  </Step>
  <Step>
  <h1 className='font-[600] mt-3 sm:text-[19px] text-[17px]'>3. Message Pop</h1>
  <p>"Say it loud, say it proud."</p>
  </Step>
  <Step>
  <h1 className='font-[600] mt-3 sm:text-[19px] text-[17px]'>4. Fun & Fillers</h1>
  <p>"Add the sparkles of joy."</p>
  </Step>
  <Step>
  <h1 className='font-[600] mt-3 sm:text-[19px] text-[17px]'>5. Party Gear</h1>
  <p>"Dress the part, play the part."</p>
  </Step>
  <Step>
  <h1 className='font-[600] mt-3 sm:text-[19px] text-[17px]'>6. Game Zone</h1>
    <p>"Engage, laugh, and bond."</p>
    
  </Step>
</Stepper>


<section className='w-[85%] h-[50px] flex items-center justify-start  sm:mt-[80px] mt-[50px]'>

<h1 className='text-[25px] text-[black] font-[600] '>{category[kitStep-1]}</h1>
</section>  

        <section className='sm:w-[80%] w-[90%] min-h-[500px]  flex items-start sm:justify-evenly sm:flex-wrap  justify-start sm:overflow-hidden overflow-x-scroll  sm:mt-[50px] mt-0'>

        {kitStep === 1?
           <>
        <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper'} off={39}/>
        <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
        <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding, Baby'} off={39}/>
        <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>

           </>:
           kitStep === 2?
           <>
        <Card img={'img9.jpg'} price={999} ogprice={1899} title={'Happy Birthday Neon Sign – LED Wall Decor with Adapter & Hanging'} off={47}/>
        <Card img={'img10.jpg'} price={999} ogprice={1899} title={'Better Together Neon Sign – Gold Color LED Wall Decor for Weddings & Events'} off={47}/>
        <Card img={'img9.jpg'} price={999} ogprice={1899} title={'Happy Birthday Neon Sign – LED Wall Decor with Adapter & Hanging'} off={47}/>
        <Card img={'img10.jpg'} price={999} ogprice={1899} title={'Better Together Neon Sign – Gold Color LED Wall Decor for Weddings & Events'} off={47}/>

           </>:kitStep === 3?
           <>
        <Card img={'img11.webp'} price={179} ogprice={399} title={'Glitter Fishtail Happy Birthday Banner (Gold / Silver / Pink) – Party Decoration'} off={55}/>
        <Card img={'img12.jpg'} price={149} ogprice={399} title={'Bride to Be Banner – Bachelorette Party Decoration with Purple Heart and Ring'} off={63}/>
        <Card img={'img11.webp'} price={179} ogprice={399} title={'Glitter Fishtail Happy Birthday Banner (Gold / Silver / Pink) – Party Decoration'} off={55}/>
        <Card img={'img12.jpg'} price={149} ogprice={399} title={'Bride to Be Banner – Bachelorette Party Decoration with Purple Heart and Ring'} off={63}/>

           </>:kitStep === 4?
           <>
            <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper'} off={39}/>
        <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding, Baby'} off={39}/>
        <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
            <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper'} off={39}/>

           </>:kitStep === 5?
           <>
            <Card img={'img13.jpg'} price={499} ogprice={599} title={'Glow in the Dark Neon Bands – 100 Pcs Glow Stick Set with Connectors'} off={17}/>
            <Card img={'img13.jpg'} price={499} ogprice={599} title={'Glow in the Dark Neon Bands – 100 Pcs Glow Stick Set with Connectors'} off={17}/>
            <Card img={'img13.jpg'} price={499} ogprice={599} title={'Glow in the Dark Neon Bands – 100 Pcs Glow Stick Set with Connectors'} off={17}/>
            <Card img={'img13.jpg'} price={499} ogprice={599} title={'Glow in the Dark Neon Bands – 100 Pcs Glow Stick Set with Connectors'} off={17}/>

           </>:kitStep===6?
           <>
            <Card img={'img13.jpg'} price={499} ogprice={599} title={'Glow in the Dark Neon Bands – 100 Pcs Glow Stick Set with Connectors'} off={17}/>
            <Card img={'img13.jpg'} price={499} ogprice={599} title={'Glow in the Dark Neon Bands – 100 Pcs Glow Stick Set with Connectors'} off={17}/>
            <Card img={'img13.jpg'} price={499} ogprice={599} title={'Glow in the Dark Neon Bands – 100 Pcs Glow Stick Set with Connectors'} off={17}/>
            <Card img={'img13.jpg'} price={499} ogprice={599} title={'Glow in the Dark Neon Bands – 100 Pcs Glow Stick Set with Connectors'} off={17}/>

           </>:
           <></>
        } 

        
        </section>


        <br />
        <br />
        <br />


    </div>
  )
}
