export default function SearchInput({ filterText, setFilterText }) {
  const handleInputChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div className='relative shadow-md w-96'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-5'>
        <i className='bx bx-search-alt-2 bx-sm'></i>
      </div>
      <input
        className='w-full block px-3 py-4 ps-16 text-sm outline-0 rounded-md'
        type='text'
        placeholder='Search for a country...'
        value={filterText}
        onChange={handleInputChange}
      />
    </div>
  );
}
