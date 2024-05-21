import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import CountryCard from '../components/CountryCard';
import Filters from '../components/Filters';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [page, setPage] = useState(0);
  const pageSize = 100;

  const fetchData = async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all');
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await res.json();
      const sortedCountries = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedCountries);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase()) &&
        country.region.toLowerCase().includes(regionFilter.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [countries, searchInput, regionFilter]);

  const paginatedCountries = filteredCountries.slice(0, (page + 1) * pageSize);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header />
      <Main>
        <Filters
          filterText={searchInput}
          setFilterText={setSearchInput}
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
          countries={countries}
          setFilteredCountries={setFilteredCountries}
        />

        {paginatedCountries.length > 0 ? (
          <section className='grid grid-cols-4 gap-12'>
            {paginatedCountries.map((country) => (
              <CountryCard
                key={country.name.common}
                img={country.flags.png}
                countryName={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            ))}
          </section>
        ) : (
          <div>No se encontraron países.</div>
        )}

        {paginatedCountries.length >= pageSize && page < 2 && (
          <button
            className='bg-white my-10 py-3 px-10 text-sm font-bold rounded-md shadow-lg'
            onClick={handleLoadMore}
          >
            Mostrar más
          </button>
        )}
      </Main>
    </>
  );
}
