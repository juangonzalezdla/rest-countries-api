import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import CountryCard from '../components/CountryCard';
import Filters from '../components/Filters';

const countries = [
  {
    countryName: 'Colombia',
    population: 50000000,
    region: 'south america',
    capital: 'Bogotá',
  },
  {
    countryName: 'Colombia',
    population: 50000000,
    region: 'south america',
    capital: 'Bogotá',
  },
  {
    countryName: 'Colombia',
    population: 50000000,
    region: 'south america',
    capital: 'Bogotá',
  },
  {
    countryName: 'Colombia',
    population: 50000000,
    region: 'south america',
    capital: 'Bogotá',
  },
  {
    countryName: 'Colombia',
    population: 50000000,
    region: 'south america',
    capital: 'Bogotá',
  },
  {
    countryName: 'Colombia',
    population: 50000000,
    region: 'south america',
    capital: 'Bogotá',
  },
  {
    countryName: 'Colombia',
    population: 50000000,
    region: 'south america',
    capital: 'Bogotá',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Filters />

        <section className='grid grid-cols-4 gap-10'>
          {countries.map((country) => (
            <CountryCard
              countryName={country.countryName}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </section>
      </Main>
    </>
  );
}
