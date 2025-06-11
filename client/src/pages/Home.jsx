import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Card from '../components/Card';
import '../App.css'
import '../index.css'
import RotatingText from '../components/RotatingText';
import ScrollVelocity from '../components/ScrollVelocity';
import Ballpit from '../components/Ballpit';
import FadeContent from '../components/Fadecontent';
import { motion, useScroll, useTransform , AnimatePresence} from "framer-motion";
import { useRef } from "react";
import Masonry from 'react-masonry-css';
import QuizCard from '../components/QuizCard';
import { useNavigate } from 'react-router-dom';
// import { CarouselSpacing } from '@/components/Carousel';
import { useInView } from "react-intersection-observer";
import Carousel from '@/components/Carousel';
// import { motion } from 'framer-motion';

export default function Home() {

    const [quizstate, setquizstate] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            confetti({particleCount:210, spread:100})
            setquizstate(true);
        },1500)
       
        
    },[])


    const ref = useRef(null);
   
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"], // optional offsets
    });
 
  
    // Translate Y based on scroll progress
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    

    // Rotate from -10deg to +10deg based on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [15, -15]);


  const images = [
    'p1.jpg',
    'p2.jpg',
    'p3.jpg',
    'p4.jpg',
    'p5.jpg',
    'p6.jpg',
    'p7.jpg',
    'p9.jpg',
    'p8.jpg',
    'p10.jpg',
    'p11.jpg',
    'p12.jpg',
  ]

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
    0:2
  };

  const breakpointColumnsObj2 = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
    0:2
  };


  const category = [
    {
      title: 'Backdrop Bliss',
      src: 'disco-ball.png'
    },
    {
      title: 'Light It Up',
      src: 'garland.png'
    },
   
    {
      title: 'Message Pop',
      src: 'garland (1).png'
    },
    {
      title: 'Fun & Fillers',
      src: 'balloons.png'
    },
    {
      title: 'Party Gear',
      src: 'carnival-mask.png'
    },
    {
      title: 'Game Zone',
      src: 'party-whistle.png'
    },
  ]

  function updateState(){
    setquizstate(false)
  }

  const balloonImages = [
    '/check2.png',
    '/con4.png',
    // '/balloon3.png',
  ];

  const content = [
    {title : "Premade Party Kits",
      sub1: "Too Busy To Plan? Tap A Kit & Celebrate",
      sub2: "Pre-styled party kits.",
      sub3: "Just click and unwrap the magic.",
      but: "SHOP NOW"
    },
    {title : "Custom Party Kits",
      sub1: "Build It Your Way. Pick ,Mix, Party.",
      sub2: "Customize every element.",
      sub3: "Your party, your story.",
      but: "BUILD NOW"
    }
  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % balloonImages.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, []);
  

  const { f, inView } = useInView({
    triggerOnce: false, // Animates every time it comes into view
    threshold: 0.5, // Adjust visibility threshold
  });


  const [animate, setAnimate] = useState(0);




  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

 
  return (
    <div className='mt-[103px] w-[100%] min-h-screen   bg-[#ED1C28]   flex items-center justify-start flex-col doodle overflow-hidden '>
      
      {/* <QuizCard state={quizstate} updatestate={updateState}/> */}

     <button onClick={scrollToTop} className='w-[50px] fixed bottom-5 flex text-white items-center justify-evenly flex-col right-11 z-50 h-[80px] rounded-[30px] bg-[#ED1C28]'>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
      </svg>
      Top
      </button>

<section className='w-[80%] sm:w-[100%] sm:h-[100dvh]  h-[450px] select-none   bg-[#ED1C28]  flex items-start sm:justify-center justify-end sm:flex-row flex-col-reverse  overflow-hidden'>

      <div className='w-[100%] sm:w-[50%]  z-30 h-[200px] p-3  sm:h-[100%] relative top-[180px]  flex items-start ml-[80px] justify-start flex-col'>
          

<       motion.h1
          key={index + 1}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.3, delay: 0 }}
          className='font-custom sm:text-[6rem] text-[3.0rem] text-center text-white p-3'
        >
         {content[index].title}
        </motion.h1>

        <motion.p
         key={index + 2}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.3, delay: 0.3 }}
           className='font5 text-[white] sm:text-[1.6rem] text-[1rem] font-[500] sm:p-3 '
        >
          {content[index].sub1}
        </motion.p>

        <div className='flex items-start justify-start  mt-9 w-[100%] h-[50px]'>
        <motion.div
        key={index + 3}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <button className='h-[50px]  w-[150px] rounded-full text-black font-[600]  flex items-center justify-center bg-white transition'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className='mr-2' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
          {content[index].but}
          </button>
        </motion.div>

        <motion.p
        key={index+ 4}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className=' text-[white] sm:text-[1.2rem] text-[1rem] font-[500] ml-[70px]'
        >
           {content[index].sub2}
           <br />
           {content[index].sub3}

        </motion.p>
        </div>


        </div>
        
       <div className='h-[100%]  w-[50%] flex items-center justify-center overflow-hidden'>

        <AnimatePresence mode="wait">
        <motion.img
          key={balloonImages[index]}
          src={balloonImages[index]}
          alt="Balloon"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="w-[100%] h-[100%] "
        />
      </AnimatePresence>
       </div>

     
        </section> 

      

        <section className=' rotate-2 overflow-hidden sm:mt-[10px] mt-[0px]'>
    <ScrollVelocity
  texts={['" Your celebration, your story—beautifully told with Maddkit. "']} 
  velocity={40} 
  className="drop-shadow md:text-[1.2rem] md:leading-[1.2rem] p-5  text-[#e4e4e4] bg-black"
/>
    </section>



    
      
      

      {/* <Carousel/> */}
      <section className='w-[100%]   sm:h-[650px]  bg-[#ED1C28]   select-none mt-[150px]  flex-col  flex items-center justify-start overflow-hidden'>
       
              <h1 className='text-[3.4rem] font5 text-wrap  text-white break-words font-[600]'>Craft Moments That Last a Lifetime.</h1>
              <h1 className='text-[3.4rem] font5 text-wrap  text-white break-words font-[600]'>Explore Categories</h1>

              <div className='flex items-center justify-center h-[550px] w-[80%]  mt-[50px] overflow-hidden '>
                <div onClick={()=>setAnimate(-1)} className='flex items-center justify-center h-[60px] w-[60px] bg-[white] rounded-[100%] hover:bg-transparent hover:border hover:border-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
                </div>
                
                <div className='flex items-center justify-start h-[550px] w-[90%]  overflow-hidden z-40 bg-[#ED1C28]'>
                <div className={`flex items-center justify-evenly h-[550px] w-[100%] mt-[50px] z-20   ${animate === 1? 'translate-x-[-50%] duration-500 ease-in-out ':animate === -1?'translate-x-[0%] duration-500 ease-in-out ':''}`}>

                <div className='h-[450px] w-[300px] min-w-[300px] max-w-[300px] m-5  bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                  <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>Backdrop Bliss</h1>
                  <div className='bg-[#FEE69A] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                    <img src="disco-ball.png" alt="" />
                  </div>
                </div>
                <div className='h-[450px] w-[300px] min-w-[300px] max-w-[300px] m-5 bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                  <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>Message Pop</h1>
                  <div className='bg-[#FFD0F2] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                  <img src="garland (1).png" alt="" />
                  </div>
                </div>
                <div className='h-[450px] w-[300px] min-w-[300px] max-w-[300px] m-5 bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                  <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>Light It Up</h1>
                  <div className='bg-[#AFD6EF] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                  <img src="garland.png" alt="" />
                  </div>
                </div>
                <div className='h-[450px] w-[300px] min-w-[300px] max-w-[300px] m-5 bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                  <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>Fun & Fillers</h1>
                  <div className='bg-[#B7F2B7] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                  <img src="balloons.png" alt="" />
                  </div>
                </div>
                
                
                <div className='h-[450px] w-[300px] min-w-[300px] max-w-[300px] m-5 bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>Party Gear</h1>
                <div className='bg-[#FFDBC1] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                <img src="carnival-mask.png" alt="" />
                </div>
              </div>
              <div className='h-[450px] w-[300px] min-w-[300px] max-w-[300px] m-5 bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>Game Zone</h1>
                <div className='bg-[#FEBCCC] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                <img src="party-whistle.png" alt="" />
                </div>
              </div>


                </div>

                </div>

                <div onClick={()=>setAnimate(1)} className='h-[60px] w-[60px] bg-[white] rounded-[100%] flex items-center justify-center hover:bg-transparent hover:border hover:border-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className='' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
                </div>

              </div>
       
        </section>
        
   
     
      

    
    

    
        <section className=' -rotate-2 relative top-[800px]  overflow-hidden sm:mt-[10px] mt-[0px]'>
    <ScrollVelocity
  texts={['" Your celebration, your story—beautifully told with Maddkit. "']} 
  velocity={40} 
  className="drop-shadow font5 md:text-[6.2rem] md:leading-[6.2rem]   text-[white] "
/>
    </section>

    <section className='w-[100%] h-[140vh]  select-none mt-[90px]  flex-col  flex items-center justify-start'>
    <h1 className='text-[3.4rem] font5 text-wrap  text-white break-words font-[600]'>Because memories are more than photos</h1>
              <h1 className='text-[3.4rem] font5 text-wrap  text-white break-words font-[600]'> — they’re feelings worth reliving</h1>
              <img src="p1.jpg" className='h-[60%] w-[30%] mt-[50px] z-30' alt="" />

          <div className='w-[80%] mt-[120px]  h-[150px] flex items-center justify-evenly'>

            <div className='w-[180px]  h-[100px] flex items-center justify-center flex-col'>
              <img src="ball.svg" className='h-[80px] w-[80px]' alt="" />
              <h2 className='text-white mt-3 font-[500]'>PREMADE PARTY KITS</h2>
            </div>
            <div className='w-[180px]  h-[100px] flex items-center justify-center flex-col'>
              <img src="con.svg" className='h-[80px] w-[80px]' alt="" />
              <h2 className='text-white mt-3 font-[500]'>CUSTOMIZE PARTY KITS</h2>
            </div>
            <div className='w-[180px]  h-[100px] flex items-center justify-center flex-col'>
              <img src="shop.svg" className='h-[80px] w-[80px]' alt="" />
              <h2 className='text-white mt-3 font-[500]'>CAREFULLY PACKED</h2>
            </div>
            <div className='w-[180px]  h-[100px] flex items-center justify-center flex-col'>
              <img src="truck.svg" className='h-[80px] w-[80px]' alt="" />
              <h2 className='text-white mt-3 font-[500]'>FAST DELIVERY</h2>
            </div>



          </div>    

</section>  

    <section className='w-[110vw] h-[190vh] bg-[white] rotate-2  select-none mt-[90px]  flex-col  flex items-center justify-start'>
    <h1 className='text-[3.4rem] font5 text-wrap  text-black -rotate-2 mt-[40px] break-words font-[600]'>Products For You</h1>
    <div className='w-[80%] h-[160vh] bg-[white] -rotate-2  select-none mt-[30px]   flex-row flex-wrap  flex items-evenly justify-evenly'>
    
      <Card img={'img1.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper Flower Fans'}/>
      <Card img={'img2.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper Flower Fans'}/>
      <Card img={'img3.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper Flower Fans'}/>
      <Card img={'img4.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper Flower Fans'}/>
      <Card img={'img5.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper Flower Fans'}/>
      <Card img={'img6.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper Flower Fans'}/>
      <Card img={'img7.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper Flower Fans'}/>
      <Card img={'img8.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner & Paper Flower Fans'}/>
    </div>  

    <button className='h-[50px]  w-[180px] rounded-full text-white -rotate-2 font-[600]  flex items-center justify-center bg-[#ED1C28] transition'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className='mr-2' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
          Find Out More
          </button>
</section>  

    <section className='w-[110vw] h-[90vh]  rotate-2  select-none mt-[90px]  flex-col  flex items-center justify-start'>
    

</section>  

<section className='w-[110vw] h-[100vh] bg-[white] rotate-2  select-none mt-[90px]  flex-col  flex items-center justify-start'>
    

</section>  



   

<section className='w-[110vw] relative h-[70vh] bg-[black] rotate-2  select-none   flex-col  flex items-center justify-start'>
    

</section> 



    </div>
  )
}
