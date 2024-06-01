import { useState, useEffect } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className='bg-white py-2 px-14 shadow-md text-dark-blue-text transition ease-linear duration-300 dark:bg-dark-blue dark:text-white max-md:px-4'>
      <div className='w-full max-w-[1440px] my-0 mx-auto h-14 flex justify-between items-center'>
        <h1 className='font-bold text-xl'>Where in the world?</h1>

        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <div className='font-medium text-base flex items-center gap-2'>
              <i className='bx bxs-sun'></i>
              Light Mode
            </div>
          ) : (
            <div className='font-medium text-base flex items-center gap-2'>
              <i className='bx bxs-moon'></i>
              Dark Mode
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
