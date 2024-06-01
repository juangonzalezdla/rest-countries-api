export default function Main({ children }) {
  return (
    <main className='w-full h-full max-w-[1440px] bg-light-gray text-dark-blue-text py-10 px-14 my-0 mx-auto dark:bg-dark-blue-background dark:text-white max-lg:px-8 transition ease-in-out delay-150 duration-300'>
      {children}
    </main>
  );
}
