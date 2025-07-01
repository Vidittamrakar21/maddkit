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
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Masonry from 'react-masonry-css';
import QuizCard from '../components/QuizCard';
import { useNavigate } from 'react-router-dom';
// import { CarouselSpacing } from '@/components/Carousel';
import { useInView } from "react-intersection-observer";
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
// import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { ToastContainer, toast  ,Bounce} from 'react-toastify';

export default function Home() {

  const [quizstate, setquizstate] = useState(false);
  const navigate = useNavigate();

  // useEffect(()=>{
  //     setTimeout(()=>{
  //         confetti({particleCount:210, spread:100})
  //         setquizstate(true);
  //     },1500)


  // },[])


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
    0: 2
  };

  const breakpointColumnsObj2 = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
    0: 2
  };


  const category = [
    {
      title: 'Backdrop Bliss',
      src: 'disco-ball.png',
      id: 53
    },
    {
      title: 'Light It Up',
      src: 'garland.png',
      id: 54
    },

    {
      title: 'Message Pop',
      src: 'garland (1).png',
      id: 55
    },
    {
      title: 'Fun & Fillers',
      src: 'balloons.png',
      id: 56
    },
    {
      title: 'Party Gear',
      src: 'carnival-mask.png',
      id: 57
    },
    {
      title: 'Game Zone',
      src: 'party-whistle.png',
      id: 58
    },
  ]

  function updateState() {
    setquizstate(false)
  }

  const balloonImages = [
    '/check2.png',
    '/con4.png',
    // '/balloon3.png',
  ];

  const content = [
    {
      title: "Premade Party Kits",
      sub1: "Too Busy To Plan? Tap A Kit & Celebrate",
      sub2: "Pre-styled party kits.",
      sub3: "Just click and unwrap the magic.",
      but: "SHOP NOW"
    },
    // {
    //   title: "Custom Party Kits",
    //   sub1: "Build It Your Way. Pick ,Mix, Party.",
    //   sub2: "Customize every element.",
    //   sub3: "Your party, your story.",
    //   but: "BUILD NOW"
    // }
    {
      title: "Premade Party Kits",
      sub1: "Too Busy To Plan? Tap A Kit & Celebrate",
      sub2: "Pre-styled party kits.",
      sub3: "Just click and unwrap the magic.",
      but: "SHOP NOW"
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

  const cards = [
    { id: 1, title: "Backdrop Bliss", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 3", description: "This is the third card." },
    { id: 4, title: "Card 4", description: "This is the fourth card." },
    { id: 5, title: "Card 5", description: "This is the fifth card." },
    { id: 5, title: "Card 5", description: "This is the fifth card." },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [products, setProducts] = useState([]);

  async function fetchProducts(){
    const data = await (await axios.get('https://maddkit.com/wp-json/wc/v3/products?consumer_key=ck_093af7accbe95ac38eadfed5c75e3e9b3baa82e6&consumer_secret=cs_97b91a6da87365fe251f05434dba14a10c02a009')).data;
    setProducts(data)
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  function handleToast(){
    toast('Item Added To Cart!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
  }

  return (
    <div className='sm:mt-[103px] mt-[75px] w-[100%] min-h-screen   bg-[#ED1C28]   flex items-center justify-start flex-col doodle overflow-hidden '>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />


      <button onClick={scrollToTop} className='sm:w-[50px] w-[40px] fixed sm:bottom-5 bottom-2 flex text-white items-center justify-evenly flex-col sm:right-11 right-2 z-50 sm:h-[80px] h-[40px] rounded-[30px] bg-[#ED1C28]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
        </svg>
        <h2 className='sm:block hidden'>Top</h2>
      </button>

      <section className='w-[100%] sm:w-[100%] sm:h-[100dvh]  h-[100dvh] select-none   bg-[#ED1C28]  flex sm:items-start items-center sm:justify-center justify-end sm:flex-row flex-col-reverse  overflow-hidden'>

        <div className='w-[80%] sm:w-[50%]  z-30 h-[200px] p-3  sm:h-[100%] relative sm:top-[180px] top-0  flex items-start sm:ml-[80px] ml-0 justify-start flex-col'>


          <motion.h1
            key={index + 1}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.3, delay: 0 }}
            onClick={() => { index === 1 ? window.location.href = '/premade-kit' : window.location.href = '/premade-kit' }}
            className='font-custom sm:text-[6rem] text-[3.0rem] text-center text-white sm:p-3 p-2'
          >
            {content[index].title}
          </motion.h1>

          <motion.p
            key={index + 2}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className='font5 text-[white] sm:text-[1.6rem] mt-3 sm:mt-0 text-[1rem] font-[500] p-2 sm:p-3 '
          >
            {content[index].sub1}
          </motion.p>

          <div className='flex sm:items-start sm:justify-start items-center justify-center sm:flex-row flex-col  mt-9 w-[100%] sm:h-[50px] h-[50px]'>
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <button onClick={() => { index === 1 ? window.location.href = '/premade-kit' : window.location.href = '/premade-kit' }} className='sm:h-[50px] h-[40px]  sm:w-[150px] w-[150px] rounded-full text-black font-[600]  flex items-center justify-center bg-white transition'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className='mr-2' viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
                {content[index].but}
              </button>
            </motion.div>

            <motion.p
              key={index + 4}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className=' text-[white] sm:text-[1.2rem] text-[0.8rem] font-[500] sm:ml-[70px] ml-0 mt-4 sm:mt-0 '
            >
              {content[index].sub2}
              <br />
              {content[index].sub3}

            </motion.p>
          </div>


        </div>

        <div className='sm:h-[100%] h-[40%]  sm:w-[50%] w-[100%] flex items-center justify-center overflow-hidden'>

          <AnimatePresence mode="wait">
            <motion.img
              key={balloonImages[index]}
              src={balloonImages[index]}
              alt="Balloon"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="sm:w-[100%] w-[80%] sm:h-[100%] h-[350px] "
            />
          </AnimatePresence>
        </div>


      </section>



      <section className=' rotate-2 overflow-hidden sm:mt-[10px] mt-[0px]'>
        <ScrollVelocity
          texts={['" Your celebration, your story—beautifully told with Maddkit. "']}
          velocity={40}
          className="drop-shadow md:text-[1.2rem] text-[1rem] md:leading-[1.2rem] sm:p-5 p-1  text-[#e4e4e4] bg-black"
        />
      </section>







      {/* <Carousel/> */}
      <section className='w-[100%]    bg-[#ED1C28]   select-none sm:mt-[150px] mt-[100px]  flex-col  flex items-center justify-start overflow-hidden'>

        <h1 className='sm:text-[3.4rem] text-[2.1rem] font5 text-wrap  text-center text-white break-words font-[600]'>Craft Moments That Last a Lifetime.</h1>
        <h1 className='sm:text-[3.4rem] text-[2.1rem] font5 text-wrap  text-white break-words font-[600]'>Explore Categories</h1>

       
        <div className="sm:w-[70%] w-[75%] px-4 py-8">
          <Slider {...settings}>
            {category.map((card) => (
              <div onClick={()=>{window.location.href = `/category?id=${card.id}`}} key={card.title} className="px-1">
                <div className='sm:h-[450px] sm:w-[300px] sm:min-w-[300px] sm:max-w-[300px] h-[350px] w-[220px] min-w-[220px] max-w-[220px]  sm:m-5 m-2 bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                  <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>{card.title}</h1>
                  <div className='bg-[#B7F2B7] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                    <img src={card.src} alt="" className=' h-[250px] w-[250px]' />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>


      </section>








      <section className=' -rotate-2 sm:relative sm:flex hidden top-[800px]  overflow-hidden sm:mt-[10px] mt-[0px]'>
        <ScrollVelocity
          texts={['" Your celebration, your story—beautifully told with Maddkit. "']}
          velocity={40}
          className="drop-shadow font5 md:text-[6.2rem] md:leading-[6.2rem]   text-[white] "
        />
      </section>

      <section className='w-[100%]   select-none mt-[90px]  flex-col  flex items-center justify-start'>
        <h1 className='sm:text-[3.4rem] text-[2.1rem] font5 text-wrap  text-center p-1 sm:p-0  text-white break-words font-[600]'>Because memories are more than photos</h1>
        <h1 className='sm:text-[3.4rem] text-[2.1rem] text-center font5 text-wrap  text-white break-words font-[600]'> — they’re feelings worth reliving</h1>
        <img src="p2.jpg" className='h-[250px] w-[320px] sm:h-[600px] sm:w-[800px] mt-[50px] z-30' alt="" />

        <div className='w-[80%] sm:mt-[120px] mt-[20px]  sm:h-[150px] h-[400px] min-h-[400px] max-h-[400px]   flex items-center justify-evenly flex-wrap'>

          <div onClick={() => { window.location.href = '/premade-kit' }} className='w-[100px]  h-[100px] sm:w-[180px]  sm:h-[100px] flex items-center justify-center flex-col'>
            <img src="ball.svg" className='h-[80px] w-[80px]' alt="" />
            <h2 className='text-white mt-3 font-[500]'>PREMADE PARTY KITS</h2>
          </div>
          <div onClick={() => { window.location.href = '/build-kit' }} className='w-[100px]  h-[100px] sm:w-[180px]  sm:h-[100px] flex items-center justify-center flex-col'>
            <img src="con.svg" className='h-[80px] w-[80px]' alt="" />
            <h2 className='text-white mt-3 font-[500]'>CUSTOMIZE PARTY KITS</h2>
          </div>
          <div className='w-[100px]  h-[100px] sm:w-[180px]  sm:h-[100px] flex items-center justify-center flex-col'>
            <img src="shop.svg" className='h-[80px] w-[80px]' alt="" />
            <h2 className='text-white mt-3 font-[500]'>CAREFULLY PACKED</h2>
          </div>
          <div className='w-[100px]  h-[100px] sm:w-[180px]  sm:h-[100px] flex items-center justify-center flex-col'>
            <img src="truck.svg" className='h-[80px] w-[80px]' alt="" />
            <h2 className='text-white mt-3 font-[500]'>FAST DELIVERY</h2>
          </div>



        </div>

      </section>

      <section className='sm:w-[110vw] w-[140vw]    bg-[white] rotate-2  select-none mt-[90px]  flex-col  flex items-center justify-start sm:p-6 p-2'>

        <h1 className='sm:text-[3.4rem] text-[2.1rem] text-center font5 text-wrap mr-11  text-black -rotate-2 mt-[40px] break-words font-[600]'>Products For You</h1>

        <div className='sm:w-[80%] w-[70%]  bg-[white] -rotate-2  select-none mt-[30px] sm:mt-[60px]   grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-6 '>

          {/* <Card img={'img1.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit'} />
          <Card img={'img2.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit '} />
          <Card img={'img3.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit '} />
          <Card img={'img4.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit '} />
          <Card img={'img5.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit '} />
          <Card img={'img6.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit '} />
          <Card img={'img7.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit '} />
          <Card img={'img8.jpg'} price={499} ogprice={699} off={20} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit '} /> */}
         






         {products.length !== 0? products.map((item, index)=>(
  
            <Card key={index} img={item.images[0].src} price={item.price} toast={handleToast} ogprice={item.regular_price} title={item.name} off={Math.round(((Number(item.regular_price) - Number(item.price) )/Number(item.regular_price)) * 100 )} id={item.id} variations={item.variations}/>

          )):
          
          <>
          
          <div role="status" class="max-w-sm p-4  border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
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
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
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
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
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
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
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


        </div>

        <button onClick={() => { window.location.href = '/allproducts' }} className='h-[50px] sm:mt-[40px] mt-[40px] mb-3 ml-11 sm:ml-0  w-[180px] rounded-full text-white -rotate-2 font-[600]  flex items-center justify-center bg-[#ED1C28] transition'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className='mr-2' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
          Find Out More
        </button>
      </section>

      <section className='w-[110vw]  rotate-2  select-none mt-[90px]  flex-col  flex items-center justify-start'>
        <h1 className='sm:text-[3.4rem] text-[2.1rem] text-center font5 text-wrap mr-6  text-white -rotate-2 mt-[10px] break-words font-[600]'>Premade Party Kits</h1>
        {/* <div className='sm:w-[70%] w-[85%]  -rotate-2  select-none mt-[30px] sm:mt-[60px]   grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-6 '>

          <div className='h-[250px] w-[160px] sm:h-[350px] sm:w-[290px]   flex items-center justify-start flex-col'>
            <img src="img1.jpg" alt="" className='h-[150px] w-[150px] sm:h-[230px] sm:w-[230px]  rounded-[100%]' />
            <h1 className='text-white font-[500] sm:text-[20px] mt-4'>Birthday Party Kit</h1>
            <h1 className='text-white font-[500] mt-1'>₹1200</h1>
          </div>
          <div className='h-[250px] w-[160px] sm:h-[350px] sm:w-[290px]   flex items-center justify-start flex-col'>
            <img src="img1.jpg" alt="" className='h-[150px] w-[150px] sm:h-[230px] sm:w-[230px]  rounded-[100%]' />
            <h1 className='text-white font-[500] sm:text-[20px] mt-4'>Birthday Party Kit</h1>
            <h1 className='text-white font-[500] mt-1'>₹1200</h1>
          </div>
          <div className='h-[250px] w-[160px] sm:h-[350px] sm:w-[290px]   flex items-center justify-start flex-col'>
            <img src="img1.jpg" alt="" className='h-[150px] w-[150px] sm:h-[230px] sm:w-[230px]  rounded-[100%]' />
            <h1 className='text-white font-[500] sm:text-[20px] mt-4'>Birthday Party Kit</h1>
            <h1 className='text-white font-[500] mt-1'>₹1200</h1>
          </div>
          <div className='h-[250px] w-[160px] sm:h-[350px] sm:w-[290px]   flex items-center justify-start flex-col'>
            <img src="img1.jpg" alt="" className='h-[150px] w-[150px] sm:h-[230px] sm:w-[230px]  rounded-[100%]' />
            <h1 className='text-white font-[500] sm:text-[20px] mt-4'>Birthday Party Kit</h1>
            <h1 className='text-white font-[500] mt-1'>₹1200</h1>
          </div>
          <div className='h-[250px] w-[160px] sm:h-[350px] sm:w-[290px]   flex items-center justify-start flex-col'>
            <img src="img1.jpg" alt="" className='h-[150px] w-[150px] sm:h-[230px] sm:w-[230px]  rounded-[100%]' />
            <h1 className='text-white font-[500] sm:text-[20px] mt-4'>Birthday Party Kit</h1>
            <h1 className='text-white font-[500] mt-1'>₹1200</h1>
          </div>
          <div className='h-[250px] w-[160px] sm:h-[350px] sm:w-[290px]   flex items-center justify-start flex-col'>
            <img src="img1.jpg" alt="" className='h-[150px] w-[150px] sm:h-[230px] sm:w-[230px]  rounded-[100%]' />
            <h1 className='text-white font-[500] sm:text-[20px] mt-4'>Birthday Party Kit</h1>
            <h1 className='text-white font-[500] mt-1'>₹1200</h1>
          </div>
          <div className='h-[250px] w-[160px] sm:h-[350px] sm:w-[290px]   flex items-center justify-start flex-col'>
            <img src="img1.jpg" alt="" className='h-[150px] w-[150px] sm:h-[230px] sm:w-[230px]  rounded-[100%]' />
            <h1 className='text-white font-[500] sm:text-[20px] mt-4'>Birthday Party Kit</h1>
            <h1 className='text-white font-[500] mt-1'>₹1200</h1>
          </div>
          <div className='h-[250px] w-[160px] sm:h-[350px] sm:w-[290px]   flex items-center justify-start flex-col'>
            <img src="img1.jpg" alt="" className='h-[150px] w-[150px] sm:h-[230px] sm:w-[230px]  rounded-[100%]' />
            <h1 className='text-white font-[500] sm:text-[20px] mt-4'>Birthday Party Kit</h1>
            <h1 className='text-white font-[500] mt-1'>₹1200</h1>
          </div>

         
        </div>

        <button onClick={() => { window.location.href = '/allproducts' }} className='h-[50px] sm:mt-[40px] mt-[40px] mb-3 ml-11 sm:ml-0  w-[180px] rounded-full text-black -rotate-2 font-[600]  flex items-center justify-center bg-[white] transition'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className='mr-2' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
            View All Kits
        </button> */}

        <h1 className='text-[19px] mt-5 -rotate-2  text-white'>Launching Soon!</h1>


      </section>

      <section className='w-[110vw]  bg-[white] rotate-2  select-none mt-[90px] sm:flex-row flex-col  flex items-center sm:justify-center justify-start'>
        <div className='w-[90%] sm:ml-5 sm:mb-11 sm:w-[40%] mt-[30px]  flex items-center sm:items-start justify-start flex-col -rotate-2 p-2'>
        <h1 className='sm:text-[2.5rem] text-[1.8rem] text-center font5 text-wrap mr-6  text-black  mt-[10px] break-words font-[600]'>"This is how unforgettable memories are made."</h1>
          <h2 className='font2 sm:text-[3.1rem] text-[1.8rem] text-[#ED1C28] p-2'>Watch their eyes ligth up.Then replay that moment for a life time.</h2>
          <h2 className=' sm:text-[2.5rem] text-[1.3rem] text-[black] p-2'>Explore Our Memory Vault, where you will find -</h2>
          <ul className=' list-disc text-black p-3'>
            <li>Reels & Poses</li>
            <li>Playlists for every mood</li>
            <li>Fun games & activity quizes</li>
            <li>Decor Hacks</li>
            <li>Thoughtful Gift Ideas</li>
          </ul>


          <button  className='h-[50px] sm:mt-[40px] mt-[20px] mb-3  sm:ml-0  w-[180px] rounded-full text-white font-[600]  flex items-center justify-center bg-[#ED1C28] '>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className='mr-2' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
            Explore Now
        </button>

        </div>

        <div className='-rotate-2 flex items-center justify-center w-[70%]  sm:w-[40%] h-[410px] mb-11 sm:mb-0 '>
            <img src="p3.jpg" className='w-[100%] sm:w-[50%] ml-3 h-[400px] sm:h-[600px]' alt="" />
        </div>
      



      </section>





      {/* <section className='w-[110vw] text-white  mb-[-100px]  h-[90vh] sm:h-[80vh] bg-[black] rotate-2  select-none   flex-col  flex items-center justify-start'>
     <div className='flex items-center justify-center mt-5 flex-col h-[300px] w-[90%]'>
     <div className='flex items-center justify-center flex-col -rotate-2 mt-3'>
       <h1 className='font-custom text-[white] sm:text-[2.4rem] text-[2.3rem] sm:mt-2 mt-0 '>MADDKIT</h1>
       <h6 className='sm:text-white text-white font2 sm:text-[2rem] text-[1.5rem]'>Party Essentials</h6>
       </div>

       <h1 className='font5 text-[white] sm:text-[2.4rem] text-center p-5 text-[2rem] -rotate-2 sm:mt-2 mt-0 '>Your celebration, your story—beautifully told with Maddkit.</h1>

     </div>

     <div className='flex items-start justify-evenly mt-5  -rotate-2    h-[250px] w-[90%] sm:w-[20%]'>
     <div className='flex items-start justify-start flex-col sm:w-[200px]    w-[100px] h-[280px]'>
    <b><h3>Categories</h3></b>
    <h3 className='mt-1'>Bakdrop Bliss</h3>
    <h3  className='mt-1'>Light It Up</h3>
    <h3 className='mt-1'>Message Pop</h3>
    <h3 className='mt-1'>Fun & Fillers</h3>
    <h3 className='mt-1'>Party Gear</h3>
    <h3 className='mt-1'>Game Zone</h3>
   </div>


   
   <div className='flex items-start justify-start flex-col sm:w-[200px]    w-[100px] h-[280px] '>
   
   <b><h3>Information</h3></b>
    <h3 className='mt-1'>Terms & Conditions</h3>
    <h3  className='mt-1'>Privacy Policy</h3>
    <h3 className='mt-1'>Return & Refund Policy</h3>
    <h3  className='mt-1'>Track Order</h3>
   </div>
   </div>
   
   <h5 className='-rotate-2 '>&copy; Maddkit. All Right Reserved.</h5>

</section>  */}

      <Footer />

    </div>
  )
}
