import React from 'react'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast  ,Bounce} from 'react-toastify';
import { ShoppingBag } from 'lucide-react'

import FilterSortPanel from '@/components/FilterSortPanel'

export default function AllProduct() {

  const [products, setProducts] = useState([]);
  const [availableFilters, setAvailableFilters] = useState({});


  async function fetchProducts(){
    const data = await (await axios.get('https://maddkit.com/wp-json/wc/v3/products?per_page=100&consumer_key=ck_093af7accbe95ac38eadfed5c75e3e9b3baa82e6&consumer_secret=cs_97b91a6da87365fe251f05434dba14a10c02a009')).data;
    setProducts(data)
    console.log(data)
    setAvailableFilters(getFilterOptions(data));
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  function getFilterOptions(products) {
    const options = {
      color: new Set(),
      age: new Set(),
      gender: new Set(),
      event: new Set(),
    };
  
    products.forEach((product) => {
      product.attributes?.forEach((attr) => {
        const key = attr.name.toLowerCase();
        if (options[key]) {
          attr.options.forEach((val) => options[key].add(val));
        }
      });
    });
  
    // Convert Set to Array
    return {
      color: Array.from(options?.color),
      age: Array.from(options?.age),
      gender: Array.from(options?.gender),
      event: Array.from(options?.event) ,
    };
  }
  

  const [cart, setCart] = useState([]);
  
  function fetchCart(){
    let crt = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(crt);
  }

  useEffect(()=>{
    fetchCart()
  },[])


  function handleToast(){
    // toast('Item Added To Cart!', {
    //     position: "bottom-center",
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //     });

        fetchCart();
  }



  const [filteredProducts, setFilteredProducts] = useState([]);
const [filters, setFilters] = useState({
  color: '',
  age: '',
  gender: '',
  event: '',
});
const [sortOption, setSortOption] = useState(''); // 'lowToHigh', 'highToLow', 'az'

useEffect(() => {
  if (products.length > 0) {
    applyFiltersAndSort();
  }
}, [products, filters, sortOption]);

function applyFiltersAndSort() {
  let filtered = [...products];

  filtered = filtered.filter((product) => {
    const attrs = product.attributes || [];

    const getValue = (key) => {
      return (
        attrs.find((a) => a.name.toLowerCase() === key.toLowerCase())?.options?.[0] || ''
      );
    };

    return (
      (!filters.color || getValue('color') === filters?.color) &&
      (!filters.age || getValue('age') === filters?.age) &&
      (!filters.gender || getValue('gender') === filters?.gender) &&
      (!filters.event || getValue('event') === filters?.event)
    );
  });

  if (sortOption === 'lowToHigh') {
    filtered.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortOption === 'highToLow') {
    filtered.sort((a, b) => Number(b.price) - Number(a.price));
  } else if (sortOption === 'az') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  setFilteredProducts(filtered);
}

const handleFilterChange = (key, value) => {
  setFilters({ ...filters, [key]: value });
};

const handleSortChange = (option) => {
  setSortOption(option);
};





  return (
    <div className='min-h-[100vh] sm:mt-[103px] mt-[80px] w-[100%] flex items-center justify-start flex-col overflow-hidden'>
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

<FilterSortPanel
  filterOptions={availableFilters}
  filters={filters}
  setFilter={handleFilterChange}
  sortOption={sortOption}
  setSort={handleSortChange}
/>




{cart.length!==0 ?<div onClick={()=>{window.location.href = '/cart'}} className='select-none w-[95%] h-[50px] bg-[#ED1C28] sm:hidden flex items-center justify-between fixed bottom-3  z-40 rounded-[10px]'>
       <div className='flex items-center justify-center ml-2'>
       <div className='h-[35px] w-[35px] rounded-[10px] flex items-center justify-center bg-[#f8737a]'>
          <ShoppingBag className='text-white' size={24}/>
        </div>
        <h1 className='text-white font-bold ml-3'>{cart.length} Items</h1>
       </div>
        <h1 className='text-white text-[19px] mr-2'>View Cart ►</h1>
      </div>:<></>}
<section className='sm:w-[85%] sm:h-[50px] sm:flex sm:items-center sm:justify-start  sm:mt-[40px] hidden'>

<h1 className='text-[25px] text-[black] font-[600] font5'>All Products</h1>
</section>  


{/* 
<FilterBar filters={filters} setFilter={handleFilterChange} attributes={products} />
<SortBar sortOption={sortOption} setSort={handleSortChange} /> */}



    <section className='sm:w-[80%] w-[96%]  bg-[white]  select-none mt-[0px] sm:mt-[50px]    grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-6  '>

   

    {filteredProducts.length !== 0 ? filteredProducts.map((item, index)=>(
  
      <Card key={index} img={item.images[0]?.src} price={item.price} ogprice={item.regular_price} title={item.name} off={Math.round(((Number(item.regular_price) - Number(item.price) )/Number(item.regular_price)) * 100 )} id={item.id} variations={item.variations} toast={handleToast} category={""}/>
   
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
