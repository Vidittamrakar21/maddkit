import React, { useState, useEffect } from 'react';
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default function Search() {

    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [timer, setTimer] = useState(null);
  
    const quickTags = [
      'Birthday',
      'Anniversary',
      'Baby Shower',
      'Bachelorette',
      'Retirement',
    ];
  
    const suggestions = [
      'Birthday Balloons',
      'Anniversary Gifts',
      'Baby Shower Decorations',
      'Bachelorette Outfits',
      'Retirement Cards',
      'Party Props',
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

  return (
    <div className='min-h-[100vh] sm:mt-[103px] mt-[80px] w-[100%] flex items-center justify-start flex-col overflow-hidden'>

<div className="max-w-[90%] min-h-[100dvh] mt-[30px] mx-auto">
        {/* Search Bar */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="party kits, decorations, events..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ED1C28]"
        />

        {/* Suggestion Box */}
        {showSuggestions && query.trim() && (
          <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-md">
            {filteredSuggestions.length ? (
              filteredSuggestions.map((item, index) => (
                <div
                  key={index}
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
              className="bg-[#ED1C28] text-white  px-4 py-2 rounded-full text-sm font-medium hover:bg-black "
              onClick={() => setQuery(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
        <Footer/>
    </div>
  )
}
