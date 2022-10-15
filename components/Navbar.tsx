import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className='bg-black px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 '>
      <div className='container flex justify-between items-center  mx-auto '>
        <a href='#' className='flex items-center'>
          <span className='self-center text-3xl font-semibold whitespace-nowrap text-white'>
            Tech-<span className='text-red-500'>Creator</span>
          </span>
        </a>
        <div className=' items-center md:flex md:w-auto md:order-1 uppercase '>
          <ol className='flex flex-col justify-content items-center p-4 mt-4 rounded-lg border border-red-500 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border md:border-red-500'>
            <li>
              <Link href='/'>
                <a
                  className='text-xl block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 hover:text-red-500'
                  aria-current='page'
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/posts'>
                <a className='text-xl block py-2 pr-4 pl-3 text-white rounded hover:text-red-500 md:p-0'>
                  Posts
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className='text-xl block py-2 pr-4 pl-3 text-white rounded hover:text-red-500 md:p-0'>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href='/todo'>
                <a className='text-xl block py-2 pr-4 pl-3 text-white rounded hover:text-red-500 md:p-0'>
                  Todo
                </a>
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
