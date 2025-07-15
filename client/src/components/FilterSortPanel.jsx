import React, { useState } from 'react';
import {Filter, SortDesc} from 'lucide-react'

export default function FilterSortPanel({ filterOptions = {}, filters, setFilter, sortOption, setSort }) {
    const [showModal, setShowModal] = useState(false);

  

    const handleToggle = (key, value) => {
        setFilter(key, filters[key] === value ? '' : value);
    };

    const renderPills = (key, values) => (
        <div className="flex flex-wrap gap-2">
            {[...values].map((value) => (
                <button
                    key={value}
                    onClick={() => handleToggle(key, value)}
                    className={`px-3 py-1 rounded-full text-sm border font-medium ${filters[key] === value
                            ? 'bg-[#ED1C28] text-white border-[#ED1C28]'
                            : 'bg-gray-100 text-gray-700 border-gray-300'
                        }`}
                >
                    {value}
                </button>
            ))}
        </div>
    );

    return (
        <>
            {/* Mobile Trigger */}
            <div className="sm:hidden w-full  flex items-center justify-between px-4 mt-3">
                <h1 className='text-[25px] text-[black] font-[600] font5'>All Products</h1>
                <button
                    onClick={() => setShowModal(true)}
                    className="h-[30px] w-[80px] flex items-center justify-evenly rounded-full border  text-black font-sm "
                >
                    <Filter size={20} /> - 
                    <SortDesc size={20} />
                   
                </button>
            </div>

            {/* Desktop View */}
            <section className="hidden sm:flex mt-[30px] gap-6 w-[95%] mx-auto px-4 py-6 bg-white rounded-xl shadow-sm border border-gray-200 ">
                {Object.entries(filterOptions).map(([key, values]) => (
                    values?.length === 0?<></> :<div key={key}>
                        <label className="block mb-2 font-semibold text-gray-800 capitalize">{key}</label>
                        {renderPills(key, values)}
                    </div>
                ))}

                <div>
                    <label className="block mb-2 font-semibold text-gray-800">Sort</label>
                    <div className="flex gap-2 flex-wrap">
                        {[
                            { value: 'lowToHigh', label: 'Price: Low to High' },
                            { value: 'highToLow', label: 'Price: High to Low' },
                            { value: 'az', label: 'Name: A to Z' },
                        ].map(({ value, label }) => (
                            <button
                                key={value}
                                onClick={() => setSort(sortOption === value ? '' : value)}
                                className={`px-3 py-1 rounded-full text-sm border font-medium ${sortOption === value
                                        ? 'bg-[#ED1C28] text-white border-[#ED1C28]'
                                        : 'bg-gray-100 text-gray-700 border-gray-300'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile Modal */}
            {showModal && (
                <div className="sm:hidden fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end items-end">
                    <div className="bg-white w-full rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Filter & Sort</h2>
                            <button onClick={() => setShowModal(false)} className="text-[#ED1C28] font-semibold">Close</button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {Object.entries(filterOptions).map(([key, values]) => (
                               values?.length === 0?<></> :<div key={key}>
                               <label className="block mb-2 font-semibold text-gray-800 capitalize">{key}</label>
                               {renderPills(key, values)}
                           </div>
                            ))}

                            <div>
                                <label className="block mb-2 font-semibold text-gray-800">Sort</label>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { value: 'lowToHigh', label: 'Price: Low to High' },
                                        { value: 'highToLow', label: 'Price: High to Low' },
                                        { value: 'az', label: 'Name: A to Z' },
                                    ].map(({ value, label }) => (
                                        <button
                                            key={value}
                                            onClick={() => setSort(sortOption === value ? '' : value)}
                                            className={`px-3 py-1 rounded-full text-sm border font-medium ${sortOption === value
                                                    ? 'bg-[#ED1C28] text-white border-[#ED1C28]'
                                                    : 'bg-gray-100 text-gray-700 border-gray-300'
                                                }`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setShowModal(false)}
                                className="mt-6 w-full bg-[#ED1C28] text-white font-semibold py-2 rounded-md"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
