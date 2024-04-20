import React, { useState } from 'react';

export default function RegionDropdown() {
  const [clickOnfilter, setClickOnFilter] = useState(false);

  const handleClick = () => {
    setClickOnFilter(!clickOnfilter);
  };

  return (
    <div>
      <button
        className='bg-white w-48 flex justify-between items-center py-3 px-4 shadow-md rounded-md cursor-pointer font-medium text-sm'
        onClick={handleClick}
      >
        Filter by Region
        {clickOnfilter ? (
          <i className='bx bx-chevron-up text-xl'></i>
        ) : (
          <i className='bx bx-chevron-down text-xl'></i>
        )}
      </button>

      {clickOnfilter && (
        <div className='bg-white absolute w-48 mt-2 py-3 px-4 shadow-md rounded-md z-10 font-medium text-sm'>
          <ul className='flex flex-col gap-2'>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Ocenia</li>
          </ul>
        </div>
      )}
    </div>
  );
}
