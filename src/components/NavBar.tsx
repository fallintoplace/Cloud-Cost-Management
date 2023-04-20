import React from 'react';
import { FaBars, FaSearch, FaBell, FaCog, FaFileAlt, FaCloud, FaInbox } from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <nav className='flex items-center justify-between bg-slate-700 text-white py-4 px-6'>
      <div className='flex items-center'>
        <FaBars className='mr-6 text-2xl' />
        <div className='text-2xl font-bold'>
          <FaCloud className='inline-block mr-2' />
          Clarity
        </div>
      </div>
      <div className='flex items-center'>
        <div className='relative rounded-full w-96 overflow-hidden'>
          <input
            type='text'
            placeholder='Search'
            className='bg-clarity-lighter border-2 border-transparent focus:border-blue-500 outline-none text-lg pl-4 pr-12 py-2 rounded-full w-full text-black'
          />
          <FaSearch className='absolute right-3 top-3 text-black' />
        </div>
        <div className='flex flex-col items-center ml-4 text-xl font-bold text-white'>
          <div>Ninja</div>
          <div className='text-base'>Cloud Architect</div>
        </div>
        <div className='flex items-center ml-6'>
          <div className='flex items-center bg-white text-clarity px-4 py-2 rounded-lg text-lg'>
            April 2023
            <FaFileAlt className='ml-2 text-lg' />
          </div>
        </div>
        <div className='flex items-center ml-6'>
          <div className='bg-white h-8 w-8 rounded-full overflow-hidden'>
            <img
              src='https://img.freepik.com/vektoren-kostenlos/netter-ninja-mit-kunai-karikatur-flacher-cartoon-stil_138676-2760.jpg'
              alt='User Avatar'
            />
          </div>
          <FaCog className='ml-6 text-2xl' />
        </div>
        <div className='flex items-center ml-6'>
          <div className='relative'>
            <FaInbox className='text-2xl' />
            <div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold'>
              2
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
