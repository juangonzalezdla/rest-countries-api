export default function ({ img, countryName, population, region, capital }) {
  const formatedPopulation = population.toLocaleString();

  return (
    <div className='bg-white w-full rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
      <figure className='w-full'>
        <img className="w-full" src={img} alt='' />
      </figure>

      <div className='p-4 flex flex-col justify-start items-start'>
        <h2 className='mb-2'>{countryName}</h2>
        <p>{formatedPopulation}</p>
        <p>{region}</p>
        <p>{capital}</p>
      </div>
    </div>
  );
}
