import { useState } from 'react';

const regions = [
  { id: 1, name: 'Africa' },
  { id: 2, name: 'Americas' },
  { id: 3, name: 'Asia' },
  { id: 4, name: 'Europe' },
  { id: 5, name: 'Oceania' },
];

export default function RegionDropdown({ countries, setFilteredCountries }) {
  const [clickOnfilter, setClickOnFilter] = useState(false);

  const handleClick = () => {
    setClickOnFilter(!clickOnfilter);
  };

  const handleRegionChange = (region) => {
    const filtered = countries.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase()
    );
    setFilteredCountries(filtered);
    setClickOnFilter(false); // Cerrar el dropdown después de seleccionar una región
  };

  return (
    <div>
      <button
        className='bg-white w-48 flex justify-between items-center py-3 px-4 shadow-md rounded-md cursor-pointer font-medium text-sm dark:bg-dark-blue'
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
        <div className='bg-white absolute w-48 mt-2 shadow-md rounded-md z-10 font-medium text-sm dark:bg-dark-blue'>
          <ul className='flex flex-col gap-2'>
            {regions.map((region) => (
              <li
                className='hover:bg-light-gray px-4 py-2 cursor-pointer hover:dark:bg-dark-blue-hover'
                key={region.id}
                onClick={() => handleRegionChange(region.name)}
              >
                {region.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
