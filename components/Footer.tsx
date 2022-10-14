import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <footer className=' bottom-0 left-0 z-20 p-4 w-full bg-black border-t border-red-500 shadow md:flex md:items-center md:justify-between md:p-6'>
        <span className='text-sm text-white sm:text-center dark:text-gray-400'>
          © 2022{' '}
          <a href='#' className='hover:underline'>
            Alexander Ohvanainen Valenzuela™
          </a>
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0'>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6'>
              Licensing
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </footer>
  );
};

export default Footer