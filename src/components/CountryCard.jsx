export default function ({ img, countryName, population, region, capital }) {
  const formatedPopulation = population.toLocaleString();

  return (
    <div className='bg-slate-400 w-full rounded-md'>
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
