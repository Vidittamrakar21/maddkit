import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: 'Backdrop Bliss',
    src: '/disco-ball.png'
  },
  {
    title: 'Light It Up',
    src: '/garland.png'
  },
 
  {
    title: 'Message Pop',
    src: '/garland (1).png'
  },
  {
    title: 'Fun & Fillers',
    src: '/balloons.png'
  },
  {
    title: 'Party Gear',
    src: '/carnival-mask.png'
  },
  {
    title: 'Game Zone',
    src: '/party-whistle.png'
  },
]


export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 1, x: 100 }}
          // animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-cover bg-center"
          
        >
               <div className='h-[450px] w-[300px] bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                  <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>{slides[index].title}</h1>
                  <div className='bg-[#FEE69A] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                    <img src={slides[index].src} alt="" />
                  </div>
                </div>
               <div className='h-[450px] w-[300px] bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                  <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>{slides[index].title}</h1>
                  <div className='bg-[#FEE69A] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                    <img src={slides[index].src} alt="" />
                  </div>
                </div>
               <div className='h-[450px] w-[300px] bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                  <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>{slides[index].title}</h1>
                  <div className='bg-[#FEE69A] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                    <img src={slides[index].src} alt="" />
                  </div>
                </div>
               <div className='h-[450px] w-[300px] bg-[#FFFFFF] flex items-center justify-between flex-col overflow-hidden'>
                  <h1 className='font5 text-[23px] font-[600] mt-11 mr-8'>{slides[index].title}</h1>
                  <div className='bg-[#FEE69A] h-[350px] w-[350px] translate-x-16 translate-y-24 rounded-[100%]'>
                    <img src={slides[index].src} alt="" />
                  </div>
                </div>
               
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <ChevronLeft className="text-black" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <ChevronRight className="text-black" />
      </button>

      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
