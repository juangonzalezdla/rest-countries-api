import SearchInput from './SearchInput';
import RegionDropdown from './RegionDropdown';

export default function Filters({
  filterText,
  setFilterText,
  countries,
  setFilteredCountries,
}) {
  return (
    <section className='flex justify-between items-center gap-80 mb-10 transition ease-linear duration-300 max-md:flex-col max-md:items-start max-md:gap-5'>
      <SearchInput filterText={filterText} setFilterText={setFilterText} />
      <RegionDropdown
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
    </section>
  );
}
