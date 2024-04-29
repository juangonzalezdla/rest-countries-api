import SearchInput from './SearchInput';
import RegionDropdown from './RegionDropdown';

export default function Filters({
  filterText,
  setFilterText,
  regionFilter,
  setRegionFilter,
  countries,
  setFilteredCountries,
}) {
  return (
    <section className='flex justify-between items-center mb-10'>
      <SearchInput filterText={filterText} setFilterText={setFilterText} />
      <RegionDropdown
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
    </section>
  );
}
