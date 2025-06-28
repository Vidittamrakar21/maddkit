import React, { useState, useEffect } from 'react';
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default function Search() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [timer, setTimer] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const quickTags = [
    'Birthday',
    'Anniversary',
    'Baby Shower',
    'Bachelorette',
    'Retirement',
  ];

  const suggestions = [
    'Birthday Balloons',
    'Anniversary Decoration',
    'Baby Shower Decorations',
    'Bachelorette',
    'Retirement Party',
    'Confetti',
  ];

  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      setShowSuggestions(true);

      if (timer) clearTimeout(timer);
      const newTimer = setTimeout(() => {
        setShowSuggestions(false);
      }, 1000);
      setTimer(newTimer);
    } else {
      setShowSuggestions(false);
      if (timer) clearTimeout(timer);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://maddkit.com/wp-json/wc/v3/products?per_page=50&consumer_key=ck_b0889e799c2d297ce09848972be70e5316b2bee7&consumer_secret=cs_68bfdeba8afd2aae06dab5816ac7088d0e6586bf');
      const data = await res.json();
      setAllProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredProducts([]);
      return;
    }

    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [query, allProducts]);

  return (
    <div className='min-h-[100vh] sm:mt-[103px] mt-[80px] w-full flex items-center justify-start flex-col overflow-hidden'>
      <div className="max-w-[90%] min-h-[30dvh] mt-[30px] sm:mt-[60px] mx-auto">
        {/* Search Bar */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for party kits, decorations, events..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ED1C28]"
        />

        {/* Suggestion Box */}
        {showSuggestions && query.trim() && (
          <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-md">
            {filteredSuggestions.length ? (
              filteredSuggestions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setQuery(item)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-400">No suggestions</div>
            )}
          </div>
        )}

        {/* Quick Search Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {quickTags.map((tag, index) => (
            <button
              key={index}
              className="bg-[#ED1C28] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black"
              onClick={() => setQuery(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Search Result Cards */}
      <section className='sm:w-[80%] w-[96%] bg-white select-none mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Card
              key={product.id}
              id={product.id}
              img={product.images[0]?.src || 'fallback.jpg'}
              price={product.price}
              ogprice={product.regular_price}
              title={product.name}
              off={
                product.regular_price && product.price
                  ? Math.round(
                      ((product.regular_price - product.price) / product.regular_price) * 100
                    )
                  : 0
              }
            />
          ))
        ) : (
          query.trim() && (
            <div className="col-span-full text-center text-gray-500 mt-10">
              No products found.
            </div>
          )
        )}
      </section>

      <br />
      <br />
      <br />
      <br />

      {/* <Footer /> */}
    </div>
  );
}
