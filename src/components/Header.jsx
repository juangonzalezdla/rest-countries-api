export default function Header() {
  return (
    <header className='bg-white py-2 px-14 shadow-md'>
      <div className='w-full max-w-[1440px] my-0 mx-auto h-14 flex justify-between items-center'>
        <h1 className='font-bold text-xl'>Where in the world?</h1>

        <div className='font-medium text-base'>
          <i className='bx bxs-moon'></i>
          <i className='bx bxs-sun'></i>
          Dark mode
        </div>
      </div>
    </header>
  );
}
