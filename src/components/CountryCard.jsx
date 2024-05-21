import { Link } from 'react-router-dom';

export default function ({
  img,
  countryName,
  population,
  region,
  capital,
  link,
}) {
  const formatedPopulation = population.toLocaleString();

  return (
    <Link to={link}>
      <div className='bg-white w-full rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
        <figure className='w-full'>
          <img className='w-full h-40 rounded-t-md' src={img} alt='' />
        </figure>

        <div className='p-4 flex flex-col justify-start items-start'>
          <h2 className='mb-2 font-extrabold text-lg'>{countryName}</h2>
          <p className='text-sm'>
            <span className='font-bold mr-2'>Population:</span>
            {formatedPopulation}
          </p>
          <p className='text-sm'>
            <span className='font-bold mr-2'>Region:</span>
            {region}
          </p>
          <p className='text-sm'>
            <span className='font-bold mr-2'>Capital:</span>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
