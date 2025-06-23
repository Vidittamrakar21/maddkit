import React from 'react'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function AllProduct() {

  const [products, setProducts] = useState([]);

  async function fetchProducts(){
    const data = await (await axios.get('https://maddkit.com/wp-json/wc/v3/products?per_page=50&consumer_key=ck_b0889e799c2d297ce09848972be70e5316b2bee7&consumer_secret=cs_68bfdeba8afd2aae06dab5816ac7088d0e6586bf')).data;
    setProducts(data)
    console.log(data)
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className='min-h-[100vh] sm:mt-[103px] mt-[80px] w-[100%] flex items-center justify-start flex-col overflow-hidden'>

<section className='w-[85%] h-[50px] flex items-center justify-start  sm:mt-[80px] mt-[20px]'>

<h1 className='text-[25px] text-[black] font-[600] font5'>All Products</h1>
</section>  

    <section className='sm:w-[80%] w-[96%]  bg-[white]  select-none mt-[0px] sm:mt-[50px]    grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-6  '>

   
    {/* <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner'} off={39}/>
    <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
    <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding'} off={39}/>
    <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
    <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner'} off={39}/>
    <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
    <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding'} off={39}/>
    <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
    <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner'} off={39}/>
    <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
    <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding'} off={39}/>
    <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
    <Card img={'img1.jpg'} price={245} ogprice={399} title={'Rainbow Party Decoration Set – 6pc DIY Birthday Decor Kit with Banner'} off={39}/>
    <Card img={'img7.jpg'} price={499} ogprice={899} title={'Brown Paper Flowers Decorations – 9pcs Floral Backdrop & Wall Fans for Party'} off={44}/>
    <Card img={'img2.jpg'} price={245} ogprice={399} title={'Hanging Paper Fans Decoration – Set of 6 (Multicolor) for Birthday, Wedding'} off={39}/> */}

    {products.map((item, index)=>(
  
      <Card key={index} img={item.images[0]?.src} price={item.price} ogprice={item.regular_price} title={item.name} off={Math.round(((Number(item.regular_price) - Number(item.price) )/Number(item.regular_price)) * 100 )} id={item.id}/>
   
    ))}
    
    
    </section>


    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Footer/>
</div>
  )
}
