import SearchInput from './SearchInput';
import RegionDropdown from './RegionDropdown';

export default function Filters() {
  return (
    <section className='flex justify-between items-center my-10'>
      <SearchInput />
      <RegionDropdown />
    </section>
  );
}
