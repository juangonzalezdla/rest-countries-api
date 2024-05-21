import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

export default function CountryDetail() {
  /*const { name } = useParams();
  const [CountryDetail, setCountryDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await res.json();
      if (data.length > 0) {
        setCountryDetails(data[0]); // El endpoint devuelve un array, tomamos el primer elemento
        setIsLoading(false);
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
  }, [name]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!countryDetails) {
    return <div>No se encontraron detalles para este país.</div>;
  }*/

  return (
    <div>
      <Header />
      <Main>
        <Link to={'/'}>
          <button className='w-28 flex items-center justify-center gap-2 bg-white font-medium py-1 px-2 shadow-md hover:shadow-lg rounded-md  mb-20 mt-10'>
            <i className='bx bx-arrow-back'></i>
            Back
          </button>
        </Link>

        <section className='grid grid-cols-2 gap-14 h-80'>
          <figure>
            <img src='' alt='' />
          </figure>

          <div className='py-5'>
            <h1 className='text-xl mb-5'>(CountryName)</h1>

            <div className='flex gap-20 mb-10'>
              <article className='flex flex-col gap-2'>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Native Name:</span>
                  (Native Name)
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Population:</span>
                  (Population)
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Region:</span>
                  (Region)
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Sub Region:</span>
                  (Sub Region)
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Capital:</span>
                  (Capital)
                </p>
              </article>
              <article className='flex flex-col gap-2'>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Top Level Domain:</span>
                  (Top Level Domain)
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Currencies:</span>
                  (Currencies)
                </p>
                <p className='text-sm'>
                  <span className='font-bold mr-2'>Languages:</span>
                  (Languages)
                </p>
              </article>
            </div>

            <div className='flex items-center gap-2'>
              <span className='text-sm font-bold'>Border Countries:</span>
              <spam className='bg-white text-sm p-2 shadow-sm rounded-md'>France</spam>
              <spam className='bg-white text-sm p-2 shadow-sm rounded-md'>Germany</spam>
              <spam className='bg-white text-sm p-2 shadow-sm rounded-md'>Netherlands</spam>
            </div>
          </div>
        </section>
      </Main>
    </div>
  );
}
