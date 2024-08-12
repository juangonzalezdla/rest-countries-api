import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { Spinner } from 'flowbite-react';

export default function CountryDetail() {
  const { name } = useParams();
  const [countryDetail, setCountryDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await res.json();
      if (data.length > 0) {
        setCountryDetail(data[0]); // El endpoint devuelve un array, tomamos el primer elemento
        setIsLoading(false);
        console.log(data);
      } else {
        throw new Error('Country not found.');
      }
    } catch (error) {
      console.error('Error fetching country details:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className='fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center transition duration-200 ease-linear opacity-100 visible z-30'>
        <Spinner className='w-20 h-20' />
      </div>
    );
  }

  if (!countryDetail) {
    return (
      <p className='dtext-lg font-semibold text-center'>
        No se encontraron detalles para este país.
      </p>
    );
  }

  const nativeName = countryDetail.name.nativeName
    ? Object.values(countryDetail.name.nativeName)[0].common
    : '';

  const currencies = countryDetail.currencies
    ? Object.values(countryDetail.currencies)
        .map((currency) => currency.name)
        .join(', ')
    : '';

  const languages = countryDetail.languages
    ? Object.values(countryDetail.languages).join(', ')
    : '';

  return (
    <div className='w-full min-h-screen bg-light-gray text-dark-blue-text dark:bg-dark-blue-background dark:text-white'>
      <Header />
      <Main>
        <Link className='w-28 block' to={'/'}>
          <button className='w-28 flex items-center justify-center gap-2 bg-white font-medium py-1 px-2 shadow-md hover:shadow-lg rounded-md mb-20 dark:bg-dark-blue'>
            <i className='bx bx-arrow-back'></i>
            Back
          </button>
        </Link>

        <section className='grid grid-cols-2 gap-24 max-lg:grid-cols-1 max-lg:gap-10'>
          <figure className='w-full'>
            <img
              className='w-full h-80'
              src={countryDetail.flags.png}
              alt='Image of some country'
            />
          </figure>

          <div className='py-5'>
            <h1 className='text-xl font-bold mb-5'>
              {countryDetail.name.common}
            </h1>

            <div className='flex gap-20 mb-10 max-lg:flex-col max-lg:gap-10'>
              <article className='flex flex-col gap-2'>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Native Name:</span>
                  {nativeName}
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Population:</span>
                  {countryDetail.population.toLocaleString()}
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Region:</span>
                  {countryDetail.region}
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Sub Region:</span>
                  {countryDetail.subregion}
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Capital:</span>
                  {countryDetail.capital}
                </p>
              </article>
              <article className='flex flex-col gap-2'>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Top Level Domain:</span>
                  {countryDetail.tld.join(', ')}
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Currencies:</span>
                  {currencies}
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Languages:</span>
                  {languages}
                </p>
              </article>
            </div>

            <div className='flex items-center gap-2 flex-wrap'>
              <div>
                <span className='text-sm font-bold'>Border Countries:</span>
              </div>
              <div className='flex gap-2 flex-wrap'>
                {countryDetail.borders && countryDetail.borders.length > 0 ? (
                  countryDetail.borders.map((borderCountry, index) => (
                    <span
                      key={index}
                      className='bg-white text-sm p-2 shadow-sm rounded-md dark:bg-dark-blue'
                    >
                      {borderCountry}
                    </span>
                  ))
                ) : (
                  <span className='text-red-600'>
                    No tiene paises fronterizos
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
      </Main>
    </div>
  );
}
